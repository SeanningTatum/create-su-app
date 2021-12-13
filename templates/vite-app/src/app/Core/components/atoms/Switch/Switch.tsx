import './Switch.css'
import { Switch as HeadlessSwitch } from '@headlessui/react'

import classNames from '@Core/lib/classNames'

export interface SwitchProps {
  enabled: boolean
  setEnabled: (val: boolean) => void
}

// MARK:- Render
function Switch(props: SwitchProps): JSX.Element {
  return (
    <HeadlessSwitch
      checked={props.enabled}
      onChange={(val) => props.setEnabled(val)}
      className={classNames(
        'switch-container',
        props.enabled ? 'bg-indigo-600' : 'bg-gray-200'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
          props.enabled ? 'translate-x-5' : 'translate-x-0'
        )}
      />
    </HeadlessSwitch>
  )
}

export default Switch
