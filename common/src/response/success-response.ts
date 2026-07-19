import type { ApiResponse } from './api-response.js';


export class SuccessResponse<T>
  implements ApiResponse<T>
{
  readonly success = true;

  constructor(
    public readonly message: string,
    public readonly data?: T
  ) {}
}