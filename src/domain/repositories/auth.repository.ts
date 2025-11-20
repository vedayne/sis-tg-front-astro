import type { SignInDto } from "../dtos";
import type { UserEntity } from "../entities";

export abstract class AuthRepository {
  abstract signIn ( signInDto: SignInDto ): Promise<UserEntity>
}