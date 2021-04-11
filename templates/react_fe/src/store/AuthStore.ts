import { createContext } from 'react';

import { action, computed, makeAutoObservable } from 'mobx';
import { AuthServiceInstance } from 'services/authService';

class AuthStore {
  username = '@SeanningTatum';

  constructor() {
    makeAutoObservable(this);
  }

  @action
  changeUsername(newUsername: string): void {
    this.username = newUsername;
  }

  @action async fetchUserFromDatabase() {
    const user = await AuthServiceInstance.fetchUser('mockId', true);

    this.username = user.username;
  }

  @computed
  get capitalizedUsername(): string {
    return this.username.toUpperCase();
  }
}

export const AuthStoreContext = createContext(new AuthStore());
