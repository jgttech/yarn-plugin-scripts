import { join } from 'path';
import { executeHelper, matchHelper } from '../utils';

const COMMAND_YARN = 'yarn';
const COMMAND_YARN_SCRIPTS = 'yarn scripts';
const COMMAND_YARN_DLX = 'yarn dlx echo-cli sup';
const COMMAND_YARN_DLX_WORKSPACE = 'yarn workspace my-workspace dlx echo-cli sup';
const COMMAND_YARN_SCRIPTS_ECHO = 'yarn scripts echo';
const COMMAND_YARN_SUB_SCRIPTS = 'yarn workspace my-workspace scripts';
const COMMAND_YARN_SUB_SCRIPTS_ECHO = 'yarn workspace my-workspace scripts echo';
const COMMAND_YARN_SCRIPTS_DOES_NOT_EXIST = 'yarn scripts i-do-not-exist';

describe.each([
  {
    command: COMMAND_YARN_SCRIPTS,
    expectations: {
      expectedStdoutToMatch: /Unknown Syntax Error/,
      expectedExitCode: 1
    }
  },
  {
    command: COMMAND_YARN_SUB_SCRIPTS,
    expectations: {
      expectedStdoutToMatch: /Unknown Syntax Error/,
      expectedExitCode: 1
    }
  },
  {
    command: COMMAND_YARN,
    expectations: {
      expectedStdoutToMatch: /hello_world/,
      expectedExitCode: 0
    }
  },
  {
    command: COMMAND_YARN_DLX,
    expectations: {
      expectedStdoutToMatch: /sup/,
      expectedExitCode: 0
    }
  },
  {
    command: COMMAND_YARN_DLX_WORKSPACE,
    expectations: {
      expectedStdoutToMatch: /sup/,
      expectedExitCode: 0
    }
  },
  {
    command: COMMAND_YARN_SCRIPTS_ECHO,
    expectations: {
      expectedStdoutToMatch: /hello_world/,
      expectedExitCode: 0
    }
  },
  {
    command: COMMAND_YARN_SUB_SCRIPTS_ECHO,
    expectations: {
      expectedStdoutToMatch: /hello_world/,
      expectedExitCode: 0
    }
  },
])('%s (success)', ({ command, expectations }) => {
  const cwd = join(__dirname, '../fixtures', 'test-package-success');

  it('Should run the "afterAllInstalled" script with a zero exit code', () => {
    const executionResult = executeHelper(command, cwd);
    matchHelper(executionResult, expectations);
  });

  it('Should run the "afterAllInstalled" script, in a sub-directory, with a zero exit code', () => {
    const executionResult = executeHelper(command, join(cwd, 'scripts'))
    matchHelper(executionResult, expectations)
  });
});

describe.each([
  {
    command: COMMAND_YARN,
    expectations: {
      expectedStdoutToMatch: /Done/,
      expectedExitCode: 0
    }
  },
  {
    command: COMMAND_YARN_SCRIPTS,
    expectations: {
      expectedStdoutToMatch: /Unknown Syntax Error/,
      expectedExitCode: 1
    }
  },
  {
    command: COMMAND_YARN_DLX,
    expectations: {
      expectedStdoutToMatch: /sup/,
      expectedExitCode: 0
    }
  },
  {
    command: COMMAND_YARN_DLX_WORKSPACE,
    expectations: {
      expectedStdoutToMatch: /sup/,
      expectedExitCode: 0
    }
  },
  {
    command: COMMAND_YARN_SCRIPTS_ECHO,
    expectations: {
      expectedStdout: /^$/,
      expectedStderr: /^command not found: i-do-not-exist\n$/,
      expectedExitCode: 127
    }
  },
  {
    command: COMMAND_YARN_SUB_SCRIPTS,
    expectations: {
      expectedStdoutToMatch: /Unknown Syntax Error/,
      expectedExitCode: 1
    }
  },
  {
    command: COMMAND_YARN_SUB_SCRIPTS_ECHO,
    expectations: {
      expectedStdout: /^$/,
      expectedStderr: /^command not found: i-do-not-exist\n$/,
      expectedExitCode: 127
    }
  },
  {
    command: COMMAND_YARN_SCRIPTS_DOES_NOT_EXIST,
    expectations: {
      expectedStdout: /^$/,
      expectedStderr: /Script not found/,
      expectedExitCode: 1
    }
  }
])('%s (failure)', ({ command, expectations }) => {
  const cwd = join(__dirname, '../fixtures', 'test-package-failure');

  it('Lifecycle script "afterAllInstalled" should NOT exist and exist a zero exit code', () => {
    const executionResult = executeHelper(command, cwd);
    matchHelper(executionResult, expectations);
  });
});
