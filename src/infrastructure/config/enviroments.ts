type Mode = 'development' | 'production'
interface Environments {
  MODE: Mode
  BASE_API_URL: string
  APP_URL: string
}

interface GetStringOrThrowOptions {
  minLength?: number
  maxLength?: number
}


const getStringOrThrow = ( key: string, options?: GetStringOrThrowOptions ): string => {
  const value = import.meta.env[ key ]
  if ( !value )
    throw new Error( `Parece que no se ha definido la variable de entorno: ${ key }` )
  if ( ( value as string ).length === 0 )
    throw new Error( `La variable de entorno ${ key } no puede estar vacía` )

  const { minLength, maxLength } = options ?? {}
  if ( minLength && value.length < minLength )
    throw new Error( `La variable de entorno ${ key } debe tener al menos ${ minLength } caracteres` )
  if ( maxLength && value.length > maxLength )
    throw new Error( `La variable de entorno ${ key } no puede tener más de ${ maxLength } caracteres` )
  return value
}

const getNumber = ( key: string ): number | undefined => {
  const value = import.meta.env[ key ]
  if ( !value ) return
  const parsedValue = Number( value )
  if ( isNaN( parsedValue ) ) return
  return parsedValue
}

export const environments: Environments = {
  MODE: ( import.meta.env.MODE  as Mode ) ?? 'development',
  BASE_API_URL: getStringOrThrow( 'BASE_API_URL' ),
  APP_URL: getStringOrThrow( 'APP_URL' ),
}
