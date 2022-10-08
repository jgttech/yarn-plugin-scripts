import { execSync } from 'child_process';
import { BaseCommand } from '@yarnpkg/cli';
import { Configuration } from '@yarnpkg/core';
import { Option } from 'clipanion';
import { isString } from 'typanion';

export class Scripts extends BaseCommand {
  script = Option.String({ validator: isString() });

  static paths = [['scripts']];

  async execute(): Promise<void | number> {
    const config = await Configuration.find(this.context.cwd, this.context.plugins);
    const isDlx = config.projectCwd?.endsWith(`dlx-${process.pid}`);
    const scripts = config.get('scripts');
    const hasScript = !!scripts[this.script] || false;
    const shx = (cmd: string) => execSync(cmd, {
      stdio: 'inherit',
      cwd: config.projectCwd || undefined
    });

    if (scripts && hasScript && !isDlx) {
      const commands = scripts[this.script];

      this.context.stdout.write(`Running script: "${this.script}"\n`);
      commands.forEach(cmd => {
        shx(cmd);
      });
    }
  }
}
