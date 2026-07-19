import type {
  ApiResponse,
} from './api-response.js';

import type {
  PaginationMeta,
} from '../pagination/pagination-meta.js';


export interface PaginationResponse<T>
  extends ApiResponse<T[]>
{
  meta: PaginationMeta;
}