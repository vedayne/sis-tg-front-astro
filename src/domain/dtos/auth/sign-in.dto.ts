export class SignInDto {
  private constructor (
    public readonly email: string,
    public readonly password: string
  ) {}

  public static create ( object: { [key: string]: any } ): SignInDto {
    const { email, password } = object

    if ( !email ) {
      throw new Error('El correo electrónico es obligatorio')
    }

    if ( !password ) {
      throw new Error('La contraseña es obligatoria')
    }

    return new SignInDto(email, password)
  }
}