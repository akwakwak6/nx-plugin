import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { AddGeneratorSchema } from './schema';

export async function addGenerator(tree: Tree, options: AddGeneratorSchema) {
  const isLib = options.type === 'lib';
  const folderName = isLib ? 'libs' : 'apps';
  const projectRoot = `${folderName}/${options.name}`;

  generateFiles(
    tree,
    path.join(__dirname, 'files', 'options.type'),
    projectRoot,
    options
  );
  await formatFiles(tree);
}

export default addGenerator;
