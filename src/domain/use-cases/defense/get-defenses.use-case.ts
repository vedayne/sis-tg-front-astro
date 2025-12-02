import type { GetDefensesDto } from '@/domain/dtos'
import type { PaginatedResponseEntity } from '@/domain/entities/shared'
import type { DefenseEntity } from '@/domain/entities/defense'
import type { DefenseRepository } from '@/domain/repositories'

interface GetDefensesUseCase {
  execute ( getDefensesDto: GetDefensesDto ): Promise<PaginatedResponseEntity<DefenseEntity[]>>
}

export class GetDefenses implements GetDefensesUseCase {
  constructor (
    private readonly defenseRepository: DefenseRepository,
  ) {}

  async execute ( getDefensesDto: GetDefensesDto ): Promise<PaginatedResponseEntity<DefenseEntity[]>> {
    try {
      const defenses = await this.defenseRepository.getDefenses( getDefensesDto )
      return defenses
    } catch ( error ) {
      throw error
    }
  }
}