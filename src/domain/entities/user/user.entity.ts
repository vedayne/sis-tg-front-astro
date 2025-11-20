export class UserEntity {
  constructor (
    public readonly id: string,
    public readonly email: string,
    public readonly accessToken?: string,
    public readonly status?: string,
    public readonly roles?: string[],
  ) {}
}