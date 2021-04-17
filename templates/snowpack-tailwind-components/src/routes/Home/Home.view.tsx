import React from 'react';

import type { HomeGeneratedProps } from './Home.types';

const HomeView = (props: HomeGeneratedProps): JSX.Element => (
  <div>
    <div className="App">
      <header className="App-header">
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
  </div>
);
export default HomeView;
