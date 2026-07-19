import type { ApiResponse } from './api-response.js';


export class ErrorResponse
  implements ApiResponse<never>
{
  readonly success = false;

  constructor(
    public readonly message: string,
    public readonly errors?: unknown
  ) {}
}