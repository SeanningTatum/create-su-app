import AuthServiceReal from './Auth/Auth';
import AuthServiceMock from './Auth/Auth.mock';

const AuthService =
  import.meta.env.MODE === 'mock'
    ? new AuthServiceMock()
    : new AuthServiceReal();

export default {
  AuthService,
};
