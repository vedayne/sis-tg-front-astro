import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { SignInDto } from '@/domain/dtos'
import { Validators } from '@/infrastructure/config'
import { UserMapper } from '@/infrastructure/mappers'
import { getSignInUseCase } from '@/providers'

export const signInAction = defineAction({
  accept: 'form',
  input: z.object({
    email: z.string({ message: 'email.isRequired' }).trim().toLowerCase()
      .regex( Validators.email, { message: 'El correo electrónico no es válido' } ),
    password: z.string({ message: 'password.isRequired' }),
  }),
  handler: async ( input, { cookies } ) => {
    const signInDto = SignInDto.create( input )
    const signInUseCase = getSignInUseCase()
    const user = await signInUseCase.execute( signInDto )
    console.log({ user })

    const token = user.accessToken
    if ( !token ) {
      throw new Error('Token no encontrado')
    }

    cookies.set('token', token)

    return {
      ok: true,
    }
  }
})
