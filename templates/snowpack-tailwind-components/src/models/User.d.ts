export enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

export interface User {
  id: string;
  email: string;
  username: string;
  type: UserType;
}
