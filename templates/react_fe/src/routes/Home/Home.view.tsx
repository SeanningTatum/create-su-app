import React from 'react';

import { HomeGeneratedProps } from './Home.props';
import { Container, ErrorMessageContainer } from './Home.style';

const HomeView = (props: HomeGeneratedProps): JSX.Element => {
  // const theme = useTheme();

  return (
    <Container>
      {props.errorMessage && (
        <ErrorMessageContainer>
          <h3>{props.errorMessage}</h3>
        </ErrorMessageContainer>
      )}
      {props.loading ? <h3>Loading...</h3> : <h1>Hello {props.username}!</h1>}
      <button onClick={props.onPressChangeUsername}>Change Username</button>
      <button onClick={props.onPressFetchUser}>Fetch User</button>
    </Container>
  );
};

export default HomeView;
