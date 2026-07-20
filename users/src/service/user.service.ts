import type {
  CreateUserDto,
  UpdateUserDto,
  UserQueryDto,
} from '../dto/index.js';

import {
  userRepository,
} from '../repository/index.js';

import {
  userMapper,
} from '../mapper/index.js';

import {
  UserNotFoundError,
  EmailAlreadyExistsError,
} from '../errors/index.js';

export class UserService {

  async create(
    dto: CreateUserDto
  ) {

    const existing =
      await userRepository.findByEmail(
        dto.email
      );

    if (existing) {
      throw new EmailAlreadyExistsError();
    }

    const user =
      await userRepository.create(dto);

    return userMapper.toResponse(user);

  }

  async findById(
    id: string
  ) {

    const user =
      await userRepository.findById(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    return userMapper.toResponse(user);

  }

  async findByEmail(
    email: string
  ) {

    const user =
      await userRepository.findByEmail(email);

    if (!user) {
      throw new UserNotFoundError();
    }

    return userMapper.toResponse(user);

  }

  async update(
    id: string,
    dto: UpdateUserDto
  ) {

    const user =
      await userRepository.update(
        id,
        dto
      );

    if (!user) {
      throw new UserNotFoundError();
    }

    return userMapper.toResponse(user);

  }

  async delete(
    id: string
  ) {

    const user =
      await userRepository.delete(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    return {
      success: true,
    };

  }

  async list(
    query: UserQueryDto
  ) {

    const users =
      await userRepository.findMany(query);

    const total =
      await userRepository.count(query);

    return {

      items:
        userMapper.toResponseList(users),

      pagination: {

        page: query.page,

        limit: query.limit,

        total,

        totalPages:
          Math.ceil(
            total / query.limit
          ),

      },

    };

  }

}

export const userService =
  new UserService();