import { ServerError } from 'types/Errors';

class AuthService {
  async fetchUser(id: string, throwError?: boolean) {
    await new Promise((resolve, reject) => {
      if (throwError) {
        setTimeout(() => reject(new ServerError()), 1000);

        return;
      } else {
        setTimeout(resolve, 3000);
      }
    });

    return { id, username: 'MockUsername' };
  }
}

export const AuthServiceInstance = new AuthService();
