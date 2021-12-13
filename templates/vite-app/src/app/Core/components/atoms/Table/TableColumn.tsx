import React from 'react'

import classNames from '@Core/lib/classNames'

export interface TableColumnProps {
  children: React.ReactNode
  className?: string
}

function TableColumn(props: TableColumnProps): JSX.Element {
  return (
    <td
      className={classNames(
        'px-6 py-2 whitespace-nowrap',
        props.className || ''
      )}
    >
      {props.children}
    </td>
  )
}

export default TableColumn
