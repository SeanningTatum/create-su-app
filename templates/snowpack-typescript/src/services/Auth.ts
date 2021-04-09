import env from '~/config/env';
import { UserType } from '~/types/Enum';
import type { LoginPayload, LoginResponse } from '~/types/services/Auth';

const URL = `${env.API_URL}/auth`;

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    code: 200,
    message: 'Mock login completed',
    body: {
      id: '1',
      email: 'test@local.com',
      username: 'test',
      type: UserType.ADMIN,
    },
  };
}
