import type { SignInDto } from "../../dtos";
import type { UserEntity } from "../../entities";
import type { AuthRepository } from "../../repositories";

interface SignInUseCase {
  execute ( signInDto: SignInDto ): Promise<UserEntity>
}

export class SignIn implements SignInUseCase {
  constructor (
    private readonly authRepository: AuthRepository,
  ) {}

  async execute ( signInDto: SignInDto ): Promise<UserEntity> {
    try {
      const user = await this.authRepository.signIn( signInDto )
      const token = user.accessToken
      if ( !token ) {
        throw new Error('Token no encontrado')
      }
      return user
    } catch ( error ) {
      throw error
    }
  }
}