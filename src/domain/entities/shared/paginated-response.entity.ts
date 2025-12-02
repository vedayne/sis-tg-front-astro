import type { PaginationEntity } from './pagination.entity'

export class PaginatedResponseEntity<T> {
  constructor (
    public pagination: PaginationEntity,
    public data: T,
  ) {}
}
