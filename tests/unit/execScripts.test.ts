import { Configuration } from '@yarnpkg/core';
import { YarnrcScripts } from '../../sources/models';
import { execScripts } from '../../sources/utils';

interface MakeConfiguration {
  (scripts: YarnrcScripts): Configuration;
}

const scripts: YarnrcScripts = {
  zero: [
    'echo "zero"'
  ],
  nonZero: [
    'exit 1'
  ]
}

const makeConfiguration: MakeConfiguration = scripts => ({
  values: new Map([['scripts', scripts]]),
  get(key: string) {
    if (!this.values.has(key))
      throw new Error(`Invalid configuration key "${key}"`);

    return this.values.get(key);
  }
} as Configuration);

describe('execScripts', () => {
  it('Should execute "yarn scripts zero" with zero exit code', () => {
    expect(execScripts(makeConfiguration(scripts), 'zero', false)).toBe(0);
  });

  it('Should execute "yarn scripts nonZero" with non-zero exit code', () => {
    expect(execScripts(makeConfiguration(scripts), 'nonZero', false)).toBe(1);
  });

  it('Should execute "yarn scripts doesNotExist" with non-zero exit code', () => {
    expect(execScripts(makeConfiguration(scripts), 'doesNotExist', true)).toBe(1);
  });

  it('Should execute "yarn scripts doesNotExist" with non-zero exit code', () => {
    expect(execScripts(makeConfiguration(scripts), 'doesNotExist', false)).toBe(0);
  });

  it('Should execute "yarn scripts" (no script called) with non-zero exit code', () => {
    expect(execScripts(makeConfiguration(scripts), undefined, true)).toBe(1);
  });
});
