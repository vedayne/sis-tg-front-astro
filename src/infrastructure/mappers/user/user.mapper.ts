import { UserEntity } from "@/domain/entities";

interface UserObject {
  id: string;
  email: string;
  accessToken?: string;
  status?: string;
  roles?: string[];
}

export class UserMapper {
  static entityFromObject ( object: { [key: string]: any } ): UserEntity {
    if ( !object ) {
      throw new Error('El objeto es obligatorio')
    }
    const { id, email, accessToken, status, roles } = object
    if ( !id ) {
      throw new Error('El id es obligatorio')
    }
    if ( !email ) {
      throw new Error('El correo electrónico es obligatorio')
    }
    return new UserEntity(
      id,
      email,
      accessToken,
      status,
      roles
    )
  }

  static objectFromEntity ( userEntity: UserEntity ): UserObject {
    return {
      ...userEntity
    }
  }
}