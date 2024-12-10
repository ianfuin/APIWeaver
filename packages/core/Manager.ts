import { convertObj } from 'swagger2openapi';
import type { Options } from 'prettier';

import { DocumentParser } from './DocumentParser';
import { buildTreeNode, TreeNode } from './treeNode';
import { generateDirAndFile } from './generateDirAndFile';
import { ApiModel } from './apiModel';
import { compareApiModel, CompareResults } from './compareApiModel';

interface Config {
  outDir: string;

  filterPath?: (path: string) => boolean;
  generateCode?: (apiModel: ApiModel) => string;

  prettierOption?: Options;
}

export class Manager {
  private apiModels: ApiModel[] | undefined;
  private prevApiModels: ApiModel[] | undefined;
  private compareResults: CompareResults | undefined;
  private treeNode: TreeNode | undefined;
  private refs: string[] = [];
  private documentParser: DocumentParser | undefined;
  constructor(private config: Config) {}

  compare() {
    if (this.prevApiModels && this.apiModels) {
      const compareInfo = compareApiModel(this.prevApiModels, this.apiModels);
      this.apiModels = compareInfo.apiModels;
      this.compareResults = compareInfo.results;
    }
  }

  async parser(schema: any) {
    const config = this.config;
    const res = await convertObj(schema, { patch: true, warnOnly: true });

    const documentParser = new DocumentParser(res.openapi as any);
    const apiModels = documentParser.getApiModels(config.filterPath);

    this.apiModels = apiModels;
    this.documentParser = documentParser;


    const { treeNode, refs } = buildTreeNode(this.apiModels, this.compareResults!, config.generateCode);
    this.refs = refs;
    this.treeNode = treeNode;
  }

  // async generateById(ids: string[]) {
  //   const config = this.config;
  //   let treeNodeItems: TreeNodeItem[] = [];
  //   let treeNode: TreeNode = {};
  //   let refs: string[] = [];

  //   Object.values(this.treeNode!).forEach((t) => {
  //     t.forEach((i) => {
  //       if (ids.includes(i.getApiModel!().uid)) {
  //         if (!treeNode[i.folder]) {
  //           treeNode[i.folder] = [];
  //         }
  //         treeNode[i.folder].push(i);
  //       }
  //     });
  //   });

  //   if (treeNodeItem) {
  //     const currRefs = treeNodeItem.getApiModel?.().refs || [];
  //     const baseClass = this.documentParser!.getBaseClass(this.refs.filter((r) => !!currRefs.includes(r)));
  //     await generateTreeNodeItem(config.outDir, treeNodeItem, config.prettierOption);
  //     await generateTreeNodeItem(config.outDir, baseClass, config.prettierOption);
  //   }

  //   const baseClass = this.documentParser!.getBaseClass(this.refs);
  //   treeNode[baseClass.folder] = [baseClass];
  //   await generateDirAndFile(treeNode, config.outDir, false, config.prettierOption);
  // }

  async generate() {
    if (!this.treeNode) return;

    const config = this.config;
    const baseClass = this.documentParser!.getBaseClass(this.refs);
    this.treeNode[baseClass.folder] = [baseClass];
    await generateDirAndFile(this.treeNode!, config.outDir, !this.prevApiModels, config.prettierOption);

    this.prevApiModels = this.apiModels;
  }
}
