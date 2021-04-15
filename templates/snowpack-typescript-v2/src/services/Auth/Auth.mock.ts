/* eslint-disable */
import env from '@app/config/env';
import { UserType } from '@app/models/User';
import delay from '@app/utils/delay';

import {AuthApi} from './Auth.types'
import type {LoginPayload, LoginResponse} from './Auth.types'


class AuthServiceMock extends AuthApi {
  apiEndpoint: string = `${env.API_URL}/auth`;

  async login(payload: LoginPayload): Promise<LoginResponse> {
    await delay(2000)

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
}

export default AuthServiceMock
