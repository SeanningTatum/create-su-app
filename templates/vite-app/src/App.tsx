import { Button } from '@Core/components/atoms'
import { useModalContext } from '@Core/store/ModalStore'
import { useNotificationContext } from '@Core/store/NotificationStore'

// import Avatar from 'components/Avatar'

function App() {
  const { showNotification } = useNotificationContext()
  const { showModal } = useModalContext()

  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Welcome to
          </h2>
          <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
            reactjs-vite-tailwindcss-boilerplate
          </p>
          <p className="text-xl text-gray-400">Start building for free.</p>
          <p className="mt-5">
            <Button
              onClick={() =>
                showNotification('Sample', 'This is a sample of a description')
              }
              className="mr-2"
            >
              Show Notification
            </Button>
            <Button
              onClick={() =>
                showModal('Sample', 'This is a sample of a description')
              }
            >
              Show Modal
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
