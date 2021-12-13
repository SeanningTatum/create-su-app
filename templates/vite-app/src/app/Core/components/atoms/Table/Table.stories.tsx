import React from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import Table, { TableProps } from './Table'
import TableColumn from './TableColumn'

export default {
  title: 'Core/Atoms/Table',
  component: Table
} as Meta

const Template: Story<TableProps> = (args) => <Table {...args} />

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Sean Urgel',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Min Jae Burgos',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
  // More people...
]

export const Basic = Template.bind({})
Basic.args = {
  headers: ['Name', 'Title', 'Status', 'Role'],
  children: people.map((person) => (
    <tr key={person.email}>
      <TableColumn>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img className="w-10 h-10 rounded-full" src={person.image} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {person.name}
            </div>
            <div className="text-sm text-gray-500">{person.email}</div>
          </div>
        </div>
      </TableColumn>
      <TableColumn>
        <div className="text-sm text-gray-900">{person.title}</div>
        <div className="text-sm text-gray-500">{person.department}</div>
      </TableColumn>
      <TableColumn>
        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
          Active
        </span>
      </TableColumn>
      <TableColumn>{person.role}</TableColumn>
      <TableColumn>
        <a
          href="#hi"
          className="font-medium text-right text-indigo-600 hover:text-indigo-900"
        >
          View Profile
        </a>
      </TableColumn>
    </tr>
  ))
}
