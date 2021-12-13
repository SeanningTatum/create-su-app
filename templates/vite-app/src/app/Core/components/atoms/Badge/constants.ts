import { BadgeColor } from '@Core/interfaces/atoms/Badge'

export const BgColor: Record<BadgeColor, string> = {
  gray: 'bg-gray-100',
  red: 'bg-red-100',
  yellow: 'bg-yellow-100',
  green: 'bg-green-100',
  blue: 'bg-blue-100',
  indigo: 'bg-indigo-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100'
}

export const TextColor: Record<BadgeColor, string> = {
  gray: 'text-gray-800',
  red: 'text-red-800',
  yellow: 'text-yellow-800',
  green: 'text-green-800',
  blue: 'text-blue-800',
  indigo: 'text-indigo-800',
  purple: 'text-purple-800',
  pink: 'text-pink-800'
}

export const DotColor: Record<BadgeColor, string> = {
  gray: 'text-gray-400',
  red: 'text-red-400',
  yellow: 'text-yellow-400',
  green: 'text-green-400',
  blue: 'text-blue-400',
  indigo: 'text-indigo-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400'
}

export const RemoveButton: Record<BadgeColor, string> = {
  gray: 'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500',
  red: 'text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500',
  yellow:
    'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500',
  green:
    'text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500',
  blue: 'text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500',
  indigo:
    'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500',
  purple:
    'text-purple-400 hover:bg-purple-200 hover:text-purple-500 focus:bg-purple-500',
  pink: 'text-pink-400 hover:bg-pink-200 hover:text-pink-500 focus:bg-pink-500'
}
