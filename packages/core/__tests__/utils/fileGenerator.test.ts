import path from 'path';
import fs from 'fs-extra';

import { TreeNode, createDirAndFile } from '../../src/utils/fileGenerator';

describe('createDirAndFile', () => {
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
  });

  afterAll(() => {
    fs.removeSync(basePath);
  });

  it('creates a new folder with all its child elements properly', async () => {
    await createDirAndFile(tree, basePath);
    console.log(basePath);

    // Assert that the folder was created in the correct path
    expect(fs.existsSync(path.join(basePath, 'someFolder'))).toBeTruthy();
    // Assert that the subfolder was created
    expect(
      fs.existsSync(path.join(basePath, 'someFolder/childFolder')),
    ).toBeTruthy();
    // Assert that the file was created, along with the correct contents
    const fileContent = fs.readFileSync(
      path.join(basePath, 'someFolder/file1.txt'),
      { encoding: 'utf8' },
    );
    expect(fileContent).toEqual('Hello!');
  });
});
