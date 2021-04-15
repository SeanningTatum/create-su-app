import type { User } from '@models/User';
import type { Response } from '@types/Response';

// MARK:- API
export abstract class AuthApi {
  abstract apiEndpoint: string;

  abstract login(payload: LoginPayload): Promise<LoginResponse>;
}

// MARK:- Login
export interface LoginPayload {
  email: string;
  username: string;
}

export type LoginResponse = Response<User>;
