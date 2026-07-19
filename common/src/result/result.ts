export type Result<T> =
  | Success<T>
  | Failure;


export interface Success<T> {
  ok: true;
  data: T;
}


export interface Failure {
  ok: false;
  error: Error;
}