import { Plugin } from '@yarnpkg/core';
import { configuration } from './utils';
import { ScriptsCommand } from './commands';
import { afterAllInstalled } from './hooks';

const plugin: Plugin = {
  configuration,
  commands: [ ScriptsCommand ],
  hooks: {
    afterAllInstalled
  }
};

export default plugin;
