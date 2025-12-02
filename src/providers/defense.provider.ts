import { DefenseDataSourceImpl } from '@/infrastructure/datasources'
import { DefenseRepositoryImpl } from '@/infrastructure/repositories'
import { GetDefenses } from '@/domain/use-cases'

export const getGetDefensesUseCase = () => {
  const defenseDataSourceImpl = new DefenseDataSourceImpl()
  const defenseRepositoryImpl = new DefenseRepositoryImpl( defenseDataSourceImpl )
  const getDefenses = new GetDefenses( defenseRepositoryImpl )
  return getDefenses
}
