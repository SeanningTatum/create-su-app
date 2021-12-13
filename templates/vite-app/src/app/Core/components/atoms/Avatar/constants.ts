import { AvatarSize as IAvatarSize } from '@Core/interfaces/atoms/Avatar'

export const FontSize: Record<IAvatarSize, string> = {
  '6': 'text-xs',
  '8': 'text-sm',
  '10': 'text-base',
  '12': 'text-medium',
  '14': 'text-lg',
  '16': 'text-xl'
}

export const Size: Record<IAvatarSize, string> = {
  '6': 'h-6 w-6',
  '8': 'h-8 w-8',
  '10': 'h-10 w-10',
  '12': 'h-12 w-12',
  '14': 'h-14 w-14',
  '16': 'h-16 w-16'
}

export const AvatarSize: Record<IAvatarSize, string> = {
  '6': 'h-1.5 w-1.5',
  '8': 'h-2 w-2',
  '10': 'h-2 w-2',
  '12': 'h-2.5 w-2.5',
  '14': 'h-3.5 w-3.5',
  '16': 'h-4 w-4'
}
