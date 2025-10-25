import React, { useState, FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        minWidth: '300px',
        textAlign: 'center'
      }}>
        {children}
        <button onClick={onClose} style={{ marginTop: '15px', padding: '8px 15px' }}>
          Tutup Modal
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div style={{ border: '2px solid blue', padding: '20px', margin: '20px' }}>
      <h2>React Portals</h2>
      <p>
        Konten ini berada di dalam komponen App. Modal akan di-render di luar hierarki DOM ini.
      </p>
      <button onClick={() => setIsModalOpen(true)}>Buka Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Pesan Penting!</h3>
        <p>Ini adalah konten modal yang di-render menggunakan React Portal.</p>
      </Modal>
    </div>
  );
};

export default App;