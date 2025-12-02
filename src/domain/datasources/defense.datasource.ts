import type { GetDefensesDto } from '../dtos/defense'
import type { DefenseEntity } from '../entities/defense'
import type { PaginatedResponseEntity } from '../entities/shared'

export abstract class DefenseDataSource {
  abstract getDefenses ( dto: GetDefensesDto ): Promise<PaginatedResponseEntity<DefenseEntity[]>>
}