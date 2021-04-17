import React from 'react';

export interface CardProps {
  children: React.ReactNode;
}

const Card = (props: CardProps): JSX.Element => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">{props.children}</div>
  </div>
);

export default Card;
