import {
  UserModel,
} from '@fortune-funding/database';

import type {
  CreateUserDto,
  UpdateUserDto,
  UserQueryDto,
} from '../dto/index.js';

export class UserRepository {

  async create(
    data: CreateUserDto
  ) {

    return UserModel.create({
      ...data,
    });

  }

  async findById(
    id: string
  ) {

    return UserModel.findById(
      id
    );

  }

  async findByEmail(
    email: string
  ) {

    return UserModel.findOne({
      email,
    });

  }

  async findMany(
    query: UserQueryDto
  ) {

    const filter: Record<
      string,
      unknown
    > = {};

    if (query.search) {

      filter.$or = [

        {
          name: {
            $regex: query.search,
            $options: 'i',
          },
        },

        {
          email: {
            $regex: query.search,
            $options: 'i',
          },
        },

      ];

    }

    return UserModel.find(filter)

      .sort({
        [query.sortBy]:
          query.order === 'asc'
            ? 1
            : -1,
      })

      .skip(
        (query.page - 1) *
        query.limit
      )

      .limit(
        query.limit
      );

  }

  async count(
    query: UserQueryDto
  ) {

    const filter: Record<
      string,
      unknown
    > = {};

    if (query.search) {

      filter.$or = [

        {
          name: {
            $regex: query.search,
            $options: 'i',
          },
        },

        {
          email: {
            $regex: query.search,
            $options: 'i',
          },
        },

      ];

    }

    return UserModel.countDocuments(
      filter
    );

  }

  async update(
    id: string,
    data: UpdateUserDto
  ) {

    return UserModel.findByIdAndUpdate(

      id,

      data,

      {
        new: true,
      }

    );

  }

  async delete(
    id: string
  ) {

    return UserModel.findByIdAndDelete(
      id
    );

  }

}

export const userRepository =
  new UserRepository();