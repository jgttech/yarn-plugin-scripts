import { SettingsType } from '@yarnpkg/core';
import { configuration } from '../../sources/utils';

const expected = {
  scripts: {
    description: 'Hook that will always run clean operations',
    type: SettingsType.ANY,
    default: ''
  }
};

describe('configuration', () => {
  it('Configuration should exist', () => {
    expect(configuration).not.toBe(null);
  });

  it('Configuration should exist', () => {
    expect(expected).toMatchObject(expected);
  });
});
