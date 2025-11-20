import { AuthDatasourceImpl } from '@/infrastructure/datasources'
import { AuthRepositoryImpl } from '@/infrastructure/repositories'
import {
  SignIn,
} from '@/domain/use-cases'

export const getSignInUseCase = () => {
  const authDatasourceImpl = new AuthDatasourceImpl()
  const authRepositoryImpl = new AuthRepositoryImpl( authDatasourceImpl )
  const signInUseCase = new SignIn( authRepositoryImpl )
  return signInUseCase
}