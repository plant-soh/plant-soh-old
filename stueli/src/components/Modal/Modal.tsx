import ReactDOM from 'react-dom';

const Modal = ({
  modalContent,
  handleModal,
  modal,
}: {
  modal: boolean;
  handleModal: (content?: string | undefined) => void;
  modalContent: string;
}) => {
  const modalDiv = document.querySelector('#modal-root');
  console.log(modalDiv);
  if (modal && modalDiv) {
    return ReactDOM.createPortal(
      <div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen"
        style={{ background: 'rgba(0,0,0,0.8)' }}
      >
        <div className="relative flex flex-col items-start p-5 text-lg text-gray-800 bg-white rounded shadow-lg">
          <button
            className="absolute top-0 right-0 self-end w-8 h-8 mb-3 -mt-12 font-bold text-red-700 bg-red-200 rounded-full"
            onClick={() => handleModal()}
          >
            &times;
          </button>
          <p>{modalContent}</p>
        </div>
      </div>,
      modalDiv,
    );
  } else return null;
};

export default Modal;
