import { UserModel } from '../models/user.js';
import type { User } from '../models/user.js';

import { BaseRepository } from './base.repository.js';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(UserModel);
  }

  findByEmail(email: string) {
    return this.model
      .findOne({
        email: email.toLowerCase(),
      })
      .exec();
  }
}

export const userRepository =
  new UserRepository();