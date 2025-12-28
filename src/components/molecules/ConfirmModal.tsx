import Button from "../atoms/Button";

interface ConfirmModalProps extends React.PropsWithChildren {
  onConfirm: () => void;
  onClose: () => void;
}

function ConfirmModal({ onConfirm, onClose, children }: ConfirmModalProps) {

  function handleConfirm() {
    onConfirm()
  }

  function handleClose() {
    onClose()
  }

  return (
    <div 
      className="fixed top-[50%] left-[50%]"
      style={{
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="flex flex-col items-center bg-white shadow-md rounded-xl py-6 px-5 md:w-[460px] w-[370px] border border-gray-200">
        {children}
        <div className="flex items-center justify-center gap-4 mt-5 w-full">
            <Button 
              buttonText="Cancel"
              onClick={handleClose}
              variant="outline"
            />
            <Button 
              buttonText="Confirm"
              onClick={handleConfirm}
              variant="danger"
            />
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal