import type { PaginationMeta } from './pagination-meta.js';


export function createPaginationMeta(
  page: number,
  limit: number,
  total: number
): PaginationMeta {

  return {

    page,

    limit,

    total,

    totalPages: Math.ceil(
      total / limit
    ),
  };
}