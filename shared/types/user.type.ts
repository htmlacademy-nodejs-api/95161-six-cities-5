import {UserTypeEnum} from './user-type.enum.js';

export type User = {
  name: string;
  email: string;
  avatarPath?: string;
  password: string;
  userType: UserTypeEnum;
}

