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
      //console.log({ response })
      const UserObject = {
        id: response.data.user.id,
        email: response.data.user.email,
        accessToken: response.data.access_token,
      }
      console.log({ UserObject })
      const userEntity = UserMapper.entityFromObject(UserObject)
      return userEntity
    } catch ( error ) {
      console.error('Error en signIn:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
      throw error
    }
  }
}