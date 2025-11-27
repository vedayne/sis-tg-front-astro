import { useState } from "react"

const Modal = () => {

  const [ isOpen, setIsOpen ] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    console.log('Abriendo modal')
    setIsOpen(true)
  }

  return (
    <>
      <button
        onClick={openModal}
        disabled={isOpen}
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Abrir Modal
      </button>
      <div className="fixed inset-0 z-50 overflow-y-auto" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-md">
            <div className="relative rounded-lg bg-white p-6 shadow-lg min-h-[200px]">
              <h1>Modal React</h1>
              <button onClick={closeModal} type="button" className="bg-red-500 text-white px-4 py-2 rounded">Cerrar Modal</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal