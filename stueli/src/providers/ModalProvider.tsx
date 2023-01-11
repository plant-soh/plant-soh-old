import React, { useContext } from 'react';
import Modal from '../components/Modal';
// import useModal from '../components/Modal/useModal';

export interface ModalValue {
  modal: boolean;
  handleModal: (content?: string) => Promise<boolean>;
  modalContent: string;
}

let ModalContext = React.createContext<ModalValue | undefined>(undefined);

export function useModal(): ModalValue {
  const value = useContext(ModalContext);
  if (!value) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return value;
}

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // let { modal, handleModal, modalContent } = useModal();

  let [modal, setModal] = React.useState(false);
  let [modalContent, setModalContent] = React.useState("I'm the Modal Content");

  let handleModal = async (content?: string): Promise<boolean> => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }

    // await new Promise((res) => setTimeout(res, 5000));
    return true;
  };

  const value: ModalValue = {
    modal,
    handleModal,
    modalContent,
  };
  return (
    <ModalContext.Provider value={value}>
      <Modal
        modal={modal}
        handleModal={handleModal}
        modalContent={modalContent}
      />
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
