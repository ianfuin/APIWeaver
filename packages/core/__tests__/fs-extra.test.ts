import path from 'path';
import fs from 'fs-extra';

import { TreeNode, createDirAndFile } from '../src/utils/fileGenerator';

jest.mock('fs-extra');

describe('fs-extra', () => {
  const basePath = path.resolve(__dirname, 'test');

  const tree: TreeNode = {
    type: 'folder',
    name: 'someFolder',
    children: [
      {
        type: 'file',
        name: 'file1.txt',
        content: 'Hello!',
      },
      {
        type: 'folder',
        name: 'childFolder',
        children: [],
      },
    ],
  };

  beforeEach(() => {
    fs.ensureDirSync(basePath);
    fs.emptyDirSync(basePath);
    jest.resetAllMocks();
  });

  afterAll(() => {
    fs.removeSync(basePath);
  });

  it('should create directory and file', async () => {
    await createDirAndFile(tree, basePath);

    expect(fs.ensureDir).toHaveBeenCalledTimes(2);
    expect(fs.ensureDir).toHaveBeenNthCalledWith(
      1,
      path.join(basePath, 'someFolder'),
    );
    expect(fs.ensureDir).toHaveBeenNthCalledWith(
      2,
      path.join(basePath, 'someFolder/childFolder'),
    );

    expect(fs.writeFile).toHaveBeenCalledTimes(1);
    expect(fs.writeFile).toHaveBeenNthCalledWith(
      1,
      path.join(basePath, 'someFolder/file1.txt'),
      'Hello!',
    );
  });
});
