import React, { useEffect, useState } from 'react';

import type { HomeGeneratedProps } from './Home.types';
import HomeView from './Home.view';

const Home = (): JSX.Element => {
  // MARK:- State
  const [count, setCount] = useState(0);

  // MARK:- Effects
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  // MARK:- Function

  // MARK:- Render
  const generatedProps: HomeGeneratedProps = {
    count,
  };

  return <HomeView {...generatedProps} />;
};

export default Home;
