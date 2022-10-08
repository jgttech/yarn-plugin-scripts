import { Plugin } from '@yarnpkg/core';
import * as Commands from './commands';
import { configuration } from './configuration';

const plugin: Plugin = {
  configuration,
  commands: [Commands.Scripts]
};

export default plugin;
