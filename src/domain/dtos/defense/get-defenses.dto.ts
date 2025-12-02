export class GetDefensesDto {
  private constructor (
    public readonly limit: number,
    public readonly offset: number,
    public readonly search?: string,
  ) {}

  public static create ( object: { [ key: string ]: any } ): GetDefensesDto {
    if ( !object ) {
      throw new Error('El objeto es obligatorio')
    }
    const {
      limit = 10,
      offset = 0,
      search,
    } = object

    if ( limit < 1 ) {
      throw new Error('El límite debe ser mayor a 0')
    }

    if ( offset < 0 ) {
      throw new Error('El offset debe ser mayor o igual a 0')
    }

    if ( search && search.length < 3 ) {
      throw new Error('El término de búsqueda debe tener al menos 3 caracteres')
    }

    return new GetDefensesDto(limit, offset, search)
  }
}