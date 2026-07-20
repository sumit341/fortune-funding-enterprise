import type {
  UserResponseDto,
} from '../dto/index.js';

export class UserMapper {

  toResponse(
    user: any
  ): UserResponseDto {

    return {

      id: user._id.toString(),

      name: user.name,

      email: user.email,

      role: user.role,

      isActive: user.isActive,

      createdAt: user.createdAt,

    };

  }

  toResponseList(
    users: any[]
  ): UserResponseDto[] {

    return users.map(
      user => this.toResponse(user)
    );

  }

}

export const userMapper =
  new UserMapper();