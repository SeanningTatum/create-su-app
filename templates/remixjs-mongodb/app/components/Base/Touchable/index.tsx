import React, { ReactNode } from 'react';
import classNames from '~/utils/classNames';

interface Props {
  name: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

function Touchable(props: Props) {
  return (
    <button
      name={props.name}
      className={classNames('p-2 hover:bg-gray-300 rounded-md cursor-pointer mt-1', props.className)}
      onClick={props.onClick}
      onKeyDown={props.onClick}
      type="button"

    >
      {props.children}
    </button>
  );
}

export default Touchable;
