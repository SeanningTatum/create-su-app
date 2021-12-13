import { AlertVariant } from '@Core/interfaces/atoms/Alert'
import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/react/solid'

export const Colors: Record<
  AlertVariant,
  {
    iconColor: string
    title: string
    desc: string
    bg: string
    Icon: React.FC<React.ComponentProps<'svg'>>
  }
> = {
  error: {
    bg: 'bg-red-50',
    iconColor: 'text-red-400',
    title: 'text-red-800',
    desc: 'text-red-700',
    Icon: XCircleIcon
  },
  warning: {
    bg: 'bg-yellow-50',
    iconColor: 'text-yellow-400',
    title: 'text-yellow-800',
    desc: 'text-yellow-700',
    Icon: ExclamationIcon
  },
  info: {
    bg: 'bg-blue-50',
    iconColor: 'text-blue-400',
    title: 'text-blue-800',
    desc: 'text-blue-700',
    Icon: InformationCircleIcon
  },
  success: {
    bg: 'bg-green-50',
    iconColor: 'text-green-400',
    title: 'text-green-800',
    desc: 'text-green-700',
    Icon: CheckCircleIcon
  }
}
