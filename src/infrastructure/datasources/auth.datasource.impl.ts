import type { AuthDataSource } from "@/domain/datasources";
import type { SignInDto } from "@/domain/dtos";
import type { UserEntity } from "@/domain/entities";
import { signInApiClient } from "../client/http";
import { UserMapper } from "../mappers";

export class AuthDatasourceImpl implements AuthDataSource {
  constructor () {}
    
  async signIn ( signInDto: SignInDto ): Promise<UserEntity> {
    const uri = '/auth/login'
    try {
      const response = await signInApiClient.post(uri, signInDto)
      const userEntity = UserMapper.entityFromObject(response.data)
      return userEntity
    } catch ( error ) {
      throw error
    }
  }
}