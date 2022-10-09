import { Project } from '@yarnpkg/core';
import { execScripts } from '../utils';

export interface AferAllInstalled {
  (project: Project): number;
}

export const afterAllInstalled: AferAllInstalled = project => {
  return execScripts(project.configuration, 'afterAllInstalled', false);
}
