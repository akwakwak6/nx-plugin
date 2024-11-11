import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PresetGeneratorSchema } from './schema';

export async function presetGenerator(
  tree: Tree,
  options: PresetGeneratorSchema
) {
  generateFiles(tree, path.join(__dirname, 'files'), options.name, options);
  await formatFiles(tree);
}

export default presetGenerator;
