/* eslint-disable */
import env from '@app/config/env';

import {AuthApi} from './Auth.types'
import type {LoginPayload, LoginResponse} from './Auth.types'
import axiosInstance from '@app/utils/axiosInstance';


class AuthService extends AuthApi {
  apiEndpoint: string = `${env.API_URL}/auth`;

  async login(payload: LoginPayload): Promise<LoginResponse> {
    const {data} = await axiosInstance.post(this.apiEndpoint, payload)

    return data;
  }
}

export default AuthService
