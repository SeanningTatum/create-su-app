import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Card(props: Props) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg w-full">
      <div className="px-4 py-5 sm:p-6 h-full">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
