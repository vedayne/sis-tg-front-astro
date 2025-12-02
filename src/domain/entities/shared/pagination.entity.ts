
export class PaginationEntity {
  constructor (
    public total: number,
    public currentPage: number,
    public totalPages: number,
    public pageSize: number,
    public nextPage?: number,
    public previousPage?: number,
  ) {}
}
