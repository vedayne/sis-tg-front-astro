import type { GetDefensesDto } from '../dtos/defense'
import type { PaginatedResponseEntity } from '../entities/shared'
import type { DefenseEntity } from '../entities/defense'

export abstract class DefenseRepository {
  abstract getDefenses ( dto: GetDefensesDto ): Promise<PaginatedResponseEntity<DefenseEntity[]>>
}