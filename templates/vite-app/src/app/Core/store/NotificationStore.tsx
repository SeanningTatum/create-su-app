import { Notification } from '@Core/components/layout'
import { NotificationVariant } from '@Core/interfaces/layout/Notifcation'
import React, { createContext, useCallback, useState } from 'react'

interface State {
  showNotification: (
    title: string,
    description: string,
    variant?: NotificationVariant
  ) => void
}

interface Props {
  children: React.ReactNode
}

// MARK:- Context / Provider
const NotificationStoreContext = createContext<State>({} as State)

const NotificationProvider = (props: Props): JSX.Element => {
  // MARK:- State
  const [notifications, setNotifications] = useState<
    {
      id: string
      title: string
      description: string
      variant: NotificationVariant
    }[]
  >([])

  // MARK:- Functions
  const deleteNotif = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const autoHideNotif = useCallback((id: string, duration = 1200) => {
    setTimeout(() => {
      deleteNotif(id)
    }, duration)
  }, [])

  const showNotification = useCallback(
    (
      title: string,
      description: string,
      variant: NotificationVariant = 'success'
    ) => {
      setNotifications((prev) => {
        const newId = new Date().toISOString()

        autoHideNotif(newId)

        return [...prev, { id: newId, title, description, variant }]
      })
    },
    [autoHideNotif]
  )

  // MARK:- Render
  const generatedState: State = {
    showNotification
  }

  return (
    <NotificationStoreContext.Provider value={generatedState}>
      {props.children}

      <div className="flex fixed top-0 right-0 flex-col gap-4 mt-8 mr-8 w-screen h-screen pointer-events-none">
        {notifications.map((notif) => (
          <Notification
            key={notif.id}
            title={notif?.title ?? ''}
            description={notif?.description}
            variant={notif?.variant}
            show
            onClose={() => deleteNotif(notif.id)}
          />
        ))}
      </div>
    </NotificationStoreContext.Provider>
  )
}

// MARK:- Hook
const useNotificationContext = () => {
  const context = React.useContext(NotificationStoreContext)

  if (context === undefined) {
    throw new Error(
      'useNotificationContext must be used within a NotifcationProvider'
    )
  }

  return context
}

export { useNotificationContext, NotificationProvider }
