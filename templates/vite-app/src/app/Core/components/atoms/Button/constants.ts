import { ButtonSize, ButtonVariant } from '@Core/interfaces/atoms/Button'

export const Padding: Record<ButtonSize, string> = {
  xs: 'px-2.5 py-1.5',
  sm: 'px-3 py-2',
  base: 'px-4 py-2',
  lg: 'px-4 py-2',
  xl: 'px-6 py-3'
}

export const FontSize: Record<ButtonSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-sm',
  lg: 'text-base',
  xl: 'text-base'
}

export const Text: Record<ButtonVariant, string> = {
  primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
  secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
  white: 'text-gray-700 bg-white border-gray-300',
  round: 'text-white bg-indigo-600 hover:bg-indigo-700 rounded-full'
}

export const Background: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 hover:bg-indigo-700',
  secondary: 'bg-indigo-100 hover:bg-indigo-200',
  white: ' bg-white border-gray-300',
  round: 'bg-indigo-600 hover:bg-indigo-700 rounded-full'
}
