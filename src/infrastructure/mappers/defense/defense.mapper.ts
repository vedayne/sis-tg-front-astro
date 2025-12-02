import { DefenseEntity } from '@/domain/entities/defense'

interface DefenseObject {
  id: string
  phase: string
  project: string
  student: string
  calification: string
  courtMember: string
  observation: string
}

export class DefenseMapper {

  static entityFromObject ( object: { [ key: string ]: any } ): DefenseEntity {
    if ( !object ) {
      throw new Error('El objeto es obligatorio')
    }
    console.log({ object })
    const {
      id,
      fase,
      proyecto,
      estudiante,
      calificacion,
      miembro,
      observacion,
    } = object
    return new DefenseEntity(
      id,
      fase,
      proyecto,
      estudiante,
      calificacion,
      miembro,
      observacion,
    )
  }

  static objectFromEntity ( defense: DefenseEntity ): DefenseObject {
    return {
      id: defense.id,
      phase: defense.phase,
      project: defense.project,
      student: defense.student,
      calification: defense.calification,
      courtMember: defense.courtMember,
      observation: defense.observation,
    }
  }
}