import type { AuthRepository } from "@/domain/repositories";
import type { SignInDto } from "@/domain/dtos";
import type { UserEntity } from "@/domain/entities";
import type { AuthDataSource } from "@/domain/datasources";

export class AuthRepositoryImpl implements AuthRepository {
    constructor (
        private readonly authDataSource: AuthDataSource
    ) {}
    
    signIn ( signInDto: SignInDto ): Promise<UserEntity> {
      return this.authDataSource.signIn( signInDto )
    }
}