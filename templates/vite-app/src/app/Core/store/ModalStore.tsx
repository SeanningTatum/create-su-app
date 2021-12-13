import React, { createContext, useCallback, useState } from 'react'
import { Modal } from '@Core/components/layout'
import { Button } from '@Core/components/atoms'

interface State {
  show: boolean
  showModal: (title: string, description: string) => void
}

interface Props {
  children: React.ReactNode
}

// MARK:- Context / Provider
const ModalStoreContext = createContext<State>({} as State)

const ModalProvider = (props: Props): JSX.Element => {
  // MARK:- State
  const [show, setShow] = useState<boolean>(false)
  const [modalDetails, setModalDetails] =
    useState<{ title: string; description: string }>()

  // MARK:- Functions
  const showModal = useCallback((title: string, description: string) => {
    setShow(true)
    setModalDetails({ title, description })
  }, [])

  const hideModal = () => setShow(false)
  // MARK:- Effects

  // MARK:- Render
  const generatedState: State = {
    show,
    showModal
  }

  return (
    <ModalStoreContext.Provider value={generatedState}>
      {props.children}

      <Modal
        title={modalDetails?.title ?? ''}
        description={modalDetails?.description}
        isOpen={show}
        closeModal={hideModal}
      >
        <div className="text-right">
          <Button onClick={hideModal}>Continue</Button>
        </div>
      </Modal>
    </ModalStoreContext.Provider>
  )
}

// MARK:- Hook
const useModalContext = () => {
  const context = React.useContext(ModalStoreContext)

  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }

  return context
}

export { useModalContext, ModalProvider }
