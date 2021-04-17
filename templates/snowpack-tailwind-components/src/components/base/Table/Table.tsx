import React from 'react';

import styled from '@emotion/styled';

export interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

// MARK:- Render
function Table(props: TableProps): JSX.Element {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {props.headers.map((header) => (
            <th
              scope="col"
              key={header}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}

          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {props.children}
      </tbody>
    </table>
  );
}

// MARK:- Styles
export const Container = styled.div``;

export default Table;
