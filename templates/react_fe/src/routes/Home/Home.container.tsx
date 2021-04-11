import React, { useContext, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from 'store/AuthStore';
import { ServerError } from 'types/Errors';

import { HomeGeneratedProps } from './Home.props';
import HomeView from './Home.view';

const Home = (): JSX.Element => {
  // MARK:- Stores
  const authStore = useContext(AuthStoreContext);

  // MARK:- States
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function onPressChangeUsername() {
    authStore.changeUsername('Casa Blanca');
  }

  async function onPressFetchUser() {
    try {
      setLoading(true);

      await authStore.fetchUserFromDatabase();
    } catch (error) {
      if (error instanceof ServerError) {
        setErrorMessage(error.message);
        return;
      }

      setErrorMessage('An unknown error has occurred');
    } finally {
      setLoading(false);
    }
  }

  const generatedProps: HomeGeneratedProps = {
    username: authStore.username,
    errorMessage,
    onPressChangeUsername,
    onPressFetchUser,
    loading,
  };
  return <HomeView {...generatedProps} />;
};

export default observer(Home);
