import React from 'react'

import classNames from '@Core/lib/classNames'

export interface TableProps {
  headers: string[]
  children: React.ReactNode
  rounded?: boolean
  shadow?: boolean
}

// MARK:- Render
function Table({ rounded = true, ...props }: TableProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 sm:px-6 lg:px-8 min-w-full align-middle">
          <div
            className={classNames(
              'overflow-hidden border-b border-gray-200',
              rounded ? 'sm:rounded-lg' : '',
              props.shadow ? 'shadow' : ''
            )}
          >
            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {props.headers.map((header) => (
                    <th
                      scope="col"
                      key={header}
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      {header}
                    </th>
                  ))}

                  {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.children}
              </tbody>
            </table>
            {/* End Table */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
