import type { Success } from './result.js';


export function success<T>(
  data: T
): Success<T> {

  return {
    ok: true,
    data,
  };
}