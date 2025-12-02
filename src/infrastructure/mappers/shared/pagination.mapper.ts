import { PaginationEntity } from '@/domain/entities/shared'

interface PaginationObject {
  total: number
  currentPage: number
  totalPages: number
  pageSize: number
  nextPage?: number
  previousPage?: number
}

export class PaginationMapper {
  static entityFromObject ( object: { [ key: string ]: any } ): PaginationEntity {
    if ( !object )
      throw new Error('El objeto es obligatorio')
    const { total, currentPage, totalPages, pageSize, nextPage, previousPage } = object
    return new PaginationEntity(
      total,
      currentPage,
      totalPages,
      pageSize,
      nextPage,
      previousPage,
    )
  }

  static objectFromEntity ( pagination: PaginationEntity ): PaginationObject {
    return {
      total: pagination.total,
      currentPage: pagination.currentPage,
      totalPages: pagination.totalPages,
      pageSize: pagination.pageSize,
      nextPage: pagination.nextPage,
      previousPage: pagination.previousPage,
    }
  }
}