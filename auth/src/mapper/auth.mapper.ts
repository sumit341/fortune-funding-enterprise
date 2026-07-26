import type {
  AuthResponseDto,
  AuthUserDto,
} from '../dto/index.js';

import type {
  UserResponseDto,
} from '@fortune-funding/users';

import type {
  AuthTokens,
} from '../types/auth.types.js';

export class AuthMapper {

  toUser(
    user: UserResponseDto
  ): AuthUserDto {

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
    };

  }

  toResponse(
    user: UserResponseDto,
    tokens: AuthTokens
  ): AuthResponseDto {

    return {

      user: this.toUser(user),

      tokens: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },

    };

  }

}

export const authMapper =
  new AuthMapper();