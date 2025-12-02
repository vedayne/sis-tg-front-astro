import { PaginationEntity } from '@/domain/entities/shared'
import { PaginatedResponseEntity } from '@/domain/entities/shared'
import { PaginationMapper } from './pagination.mapper'

interface PaginatedResponseObject<T> {
  data: T
  [key: string]: any
}

export class PaginatedResponseMapper {
  static entityFromObject <T> ( object: { [ key: string ]: any } ): PaginatedResponseEntity<T> {
    if ( !object )
      throw new Error('El objeto es obligatorio')
    const { pagination, data } = object
    return new PaginatedResponseEntity(
      PaginationMapper.entityFromObject(pagination),
      data,
    )
  }

  static objectFromEntity <T> ( paginatedResponse: PaginatedResponseEntity<T> ): PaginatedResponseObject<T> {
    return {
      data: paginatedResponse.data,
      pagination: PaginationMapper.objectFromEntity(paginatedResponse.pagination),
    }
  }
}