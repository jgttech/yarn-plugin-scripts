// eslint-disable @typescript-eslint/no-unsafe-return
import { Configuration, Project } from '@yarnpkg/core';
import { YarnrcScripts } from '../../sources/models';
import { afterAllInstalled } from '../../sources/hooks';

interface MakeConfiguration {
  (scripts: YarnrcScripts): Project;
}

const scriptsSuccess: YarnrcScripts = {
  afterAllInstalled: [
    'exit 0'
  ]
};

const scriptsFailure: YarnrcScripts = {
  afterAllInstalled: [
    'exit 1'
  ]
};

const makeProject: MakeConfiguration = scripts => ({
  configuration: {
    values: new Map([['scripts', scripts]]),
    get(key: string) {
      if (!this.values.has(key))
        throw new Error(`Invalid configuration key "${key}"`);

      return this.values.get(key);
    }
  } as Configuration
}) as Project;

describe('afterAllInstalled', () => {
  it('Should execute "afterAllInstalled" with zero exit code', () => {
    expect(afterAllInstalled(makeProject(scriptsSuccess))).toBe(0);
  });

  it('Should execute "afterAllInstalled" with non-zero exit code', () => {
    expect(afterAllInstalled(makeProject(scriptsFailure))).toBe(1);
  });

  it('Should NOT execute "afterAllInstalled" (does not exist) with zero exit code', () => {
    expect(afterAllInstalled(makeProject({}))).toBe(0);
  });
});
