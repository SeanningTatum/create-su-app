import type { UserType } from '~/types/Enum';

export interface User {
  id: string;
  email: string;
  username: string;
  type: UserType;
}
