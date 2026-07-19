import type { Failure } from './result.js';


export function failure(
  error: Error
): Failure {

  return {
    ok: false,
    error,
  };
}