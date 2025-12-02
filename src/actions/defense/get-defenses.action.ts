import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { GetDefensesDto } from '@/domain/dtos'
import { Validators } from '@/infrastructure/config'
import { DefenseMapper, PaginationMapper } from '@/infrastructure/mappers'
import { getGetDefensesUseCase } from '@/providers'

export const getDefensesAction = defineAction({
  accept: 'json',
  input: z.object({
    limit: z.optional(z.number()).default(10),
    offset: z.optional(z.number()).default(0),
    search: z.optional(z.string()).default(''),
  }),
  handler: async ( input, { cookies } ) => {
    const getDefensesDto = GetDefensesDto.create( input )
    console.log({ getDefensesDto })
    const getDefensesUseCase = getGetDefensesUseCase()
    const defenses = await getDefensesUseCase.execute( getDefensesDto )
    console.log({ defenses })

    const defenseObject = defenses.data.map( DefenseMapper.objectFromEntity )
    const paginationObject = PaginationMapper.objectFromEntity( defenses.pagination )
    console.log({ defenseObject, paginationObject })

    return {
      ok: true,
      data: defenseObject,
      pagination: paginationObject
    }
  }
})
