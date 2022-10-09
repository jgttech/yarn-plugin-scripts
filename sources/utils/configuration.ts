import { ConfigurationDefinitionMap, SettingsType } from '@yarnpkg/core';
import type { YarnrcScripts } from '../models';

/**
 * Extend ".yarnrc.yml" to allow "scripts" key.
 */
 declare module '@yarnpkg/core' {
  interface ConfigurationValueMap {
    scripts?: YarnrcScripts;
  }
}

/**
 * Define `scripts` config.
 */
export const configuration: Partial<ConfigurationDefinitionMap> = {
  scripts: {
    description: 'Hook that will always run clean operations',
    type: SettingsType.ANY,
    default: ''
  }
}
