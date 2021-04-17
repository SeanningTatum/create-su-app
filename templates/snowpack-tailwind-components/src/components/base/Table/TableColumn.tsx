import React from 'react';

interface TableColumn {
  children: React.ReactNode;
}

function TableColumn(props: TableColumn): JSX.Element {
  return <td className="px-6 py-4 whitespace-nowrap">{props.children}</td>;
}

export default TableColumn;
