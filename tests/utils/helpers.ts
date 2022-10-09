import { execSync } from 'child_process';

interface Expectations {
  expectedStdoutToMatch?: RegExp;
  expectedStdoutNotToMatch?: RegExp;
  expectedStderrToMatch?: RegExp;
  expectedStderrNotToMatch?: RegExp;
  expectedExitCode: number;
}

interface ExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

interface MatchHelper {
  (result: ExecutionResult, expectations: Expectations): void;
}

interface ExecuteHelper {
  (command: string, cwd: string): ExecutionResult;
}

export const matchHelper: MatchHelper = (result, expectations) => {
  const { stdout, stderr, exitCode } = result;
  const {
    expectedStdoutToMatch,
    expectedStdoutNotToMatch,
    expectedStderrToMatch,
    expectedStderrNotToMatch,
    expectedExitCode
  } = expectations;

  expect(exitCode).toBe(expectedExitCode);
  expectedStdoutToMatch && expect(stdout).toMatch(expectedStdoutToMatch);
  expectedStdoutNotToMatch && expect(stdout).not.toMatch(expectedStdoutNotToMatch);
  expectedStderrToMatch && expect(stderr).toMatch(expectedStderrToMatch);
  expectedStderrNotToMatch && expect(stderr).not.toMatch(expectedStderrNotToMatch);
}

export const executeHelper: ExecuteHelper = (command, cwd) => {
  let stdout: string;
  let stderr: string;
  let exitCode: number;

  try {
    stdout = execSync(command, { cwd }).toString();
    stderr = '';
    exitCode = 0;
  } catch (err) {
    stdout = (err as { stdout: Buffer }).stdout.toString();
    stderr = (err as { stderr: Buffer }).stderr.toString();
    exitCode = (err as { status: number })?.status || 1;
  }
  return { stdout, stderr, exitCode };
}
