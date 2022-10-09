import { Configuration } from '@yarnpkg/core'
import { BaseCommand } from '@yarnpkg/cli';
import { Option } from 'clipanion';
import { isString } from 'typanion';
import { execScripts } from '../utils';

export class ScriptsCommand extends BaseCommand {
  script = Option.String({ validator: isString() });

  static paths = [['scripts']];

  async execute(): Promise<void | number> {
    const config = await Configuration.find(this.context.cwd, this.context.plugins);
    return execScripts(config, this.script, true);
  }
}
