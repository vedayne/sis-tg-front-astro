import type { DefenseDataSource } from "@/domain/datasources";
import type { DefenseEntity } from "@/domain/entities";
import type { DefenseRepository } from "@/domain/repositories";
import type { GetDefensesDto } from "@/domain/dtos";
import type { PaginatedResponseEntity } from "@/domain/entities/shared";

export class DefenseRepositoryImpl implements DefenseRepository {
    constructor (
        private readonly defenseDataSource: DefenseDataSource
    ) {}
    
    getDefenses ( getDefensesDto: GetDefensesDto ): Promise<PaginatedResponseEntity<DefenseEntity[]>> {
      return this.defenseDataSource.getDefenses( getDefensesDto )
    }
}