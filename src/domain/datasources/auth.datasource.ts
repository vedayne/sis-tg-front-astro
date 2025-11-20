import type { SignInDto } from "../dtos";
import type { UserEntity } from "../entities/user/user.entity";

export abstract class AuthDataSource {
  abstract signIn ( signInDto: SignInDto ): Promise<UserEntity>
}