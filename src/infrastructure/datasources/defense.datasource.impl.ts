import { DefenseDataSource } from '@/domain/datasources'
import type { DefenseEntity } from '@/domain/entities'
import type { GetDefensesDto } from '@/domain/dtos'
import { PaginatedResponseEntity } from '@/domain/entities/shared'
import { signInApiClient } from '@/infrastructure/client/http'
import { DefenseMapper } from '@/infrastructure/mappers'
import { PaginatedResponseMapper, PaginationMapper } from '@/infrastructure/mappers/shared'
import { labels } from '../mocks/defensas' 

export class DefenseDataSourceImpl implements DefenseDataSource {
  constructor ( ) {}
    
  async getDefenses ( getDefensesDto: GetDefensesDto ): Promise<PaginatedResponseEntity<DefenseEntity[]>> {
    const uri = '/defenses'
    try {
      //const response = await signInApiClient.get( uri, { params: getDefensesDto } )
      //console.log({ response })
      const response = await labels
      const DefenseObject = {
        pagination: response.pagination,
        data: response.data,
      }
      console.log({ DefenseObject })
      const defenseEntities = DefenseObject.data.map( DefenseMapper.entityFromObject )
      const paginationEntity = PaginationMapper.entityFromObject(DefenseObject.pagination)
      return new PaginatedResponseEntity(paginationEntity, defenseEntities)
    } catch ( error: any ) {
      console.error('Error en signIn:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
      throw error
    }
  }
}