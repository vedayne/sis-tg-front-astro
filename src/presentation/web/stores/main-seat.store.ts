import { atom } from 'nanostores'

export const mainSeat = atom<string>( 'La Paz' )

export const selectSeat = ( seat: string ) => {
  mainSeat.set( seat )
}

export const resetSeat = () => {
  mainSeat.set( 'La Paz' )
}

export const getMainSeat = () => {
  return mainSeat.get()
}

export const mainSeatEspecified = atom<string>( 'La Paz-Central' )

export const selectSeatEspecified = ( seat: string ) => {
    mainSeatEspecified.set( seat )
}