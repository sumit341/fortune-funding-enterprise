import {
  UserRole,
} from '@fortune-funding/common';

export interface UserResponseDto {

  id: string;

  name: string;

  email: string;

  role: UserRole;

  isActive: boolean;

  createdAt: Date;

}