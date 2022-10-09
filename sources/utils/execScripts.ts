import { Configuration } from '@yarnpkg/core';
import { execSync } from 'child_process';

export interface ExecScript {
  (config: Configuration, script: string, throwable: boolean): number;
}

/**
 * Executes whatever script the user is trying to invoke
 * when invoking the "yarn scripts <whatever_script>" command.
 *
 * @param {Configuration} config Configuration
 * @param {string} script The script the user is trying to invoke.
 * @returns {void | number} Exit code
 */
export const execScripts: ExecScript = (config: Configuration, script, throwable) => {
  const isDlx = config.projectCwd?.endsWith(`dlx-${process.pid}`);
  const scripts = config.get('scripts');
  const hasScript = !!scripts[script] || false;
  const shx = (cmd: string) => execSync(cmd, {
    stdio: 'inherit',
    cwd: config.projectCwd || undefined
  });

  try {
    if (!hasScript && throwable)
      throw new Error(`[yarn scripts] Script not found "${script}".`);
    else if (scripts && hasScript && !isDlx) {
      const commands = scripts[script];
      commands.forEach(cmd => shx(cmd));
    }
  } catch(e) {
    return e?.status || 1;
  }

  return 0;
};
