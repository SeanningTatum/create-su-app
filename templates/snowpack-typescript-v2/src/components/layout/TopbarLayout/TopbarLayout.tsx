import React from 'react';

import tw from 'tailwind-styled-components';

import Header from './components/Header';

export interface TopbarLayoutProps {
  children: React.ReactNode;
}

function TopbarLayout(props: TopbarLayoutProps): JSX.Element {
  return (
    <Container>
      <TopBackground className="">
        <Header />

        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          </div>
        </header>
      </TopBackground>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 overflow-y-auto">
            {props.children}
          </div>
        </div>
      </main>
    </Container>
  );
}

const Container = tw.div`
  min-h-screen bg-gray-100
`;

const TopBackground = tw.div`
  bg-indigo-600 pb-32
`;

export default TopbarLayout;
