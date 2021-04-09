import React from 'react';

import logo from '../../logo.svg';
// import { useTheme } from 'utils/Theme';
import type { HomeGeneratedProps } from './Home.props';
import { Container } from './Home.style';

const HomeView = (props: HomeGeneratedProps): JSX.Element => (
  // const theme = useTheme();
  <Container>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{props.count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  </Container>
);
export default HomeView;
