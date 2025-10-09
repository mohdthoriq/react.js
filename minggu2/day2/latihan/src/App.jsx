import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import ProductList from './components/Product';
import BadTodoList from './components/BadTodoList';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Conditional Rendering dengan && Operator</h2>
      <h1>Halo!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          Anda memiliki {unreadMessages.length} pesan belum dibaca.
        </h2>
      }
      {unreadMessages.length === 0 &&
        <p>Tidak ada pesan baru.</p>
      }
    </div>
  );
}

function WarningBanner(props) {
  if (!props.warn) {
    return null; // Tidak me-render apa-apa
  }

  return (
    <div style={{ backgroundColor: 'yellow', padding: '10px', border: '1px solid orange' }}>
      Peringatan!
    </div>
  );
}

function PageStatus({ status }) {
  let content;
  switch (status) {
    case 'loading':
      content = <p>Memuat data...</p>;
      break;
    case 'success':
      content = <p style={{ color: 'green' }}>Data berhasil dimuat!</p>;
      break;
    case 'error':
      content = <p style={{ color: 'red' }}>Terjadi kesalahan saat memuat data.</p>;
      break;
    default:
      content = <p>Status tidak diketahui.</p>;
  }
  return content;
}

function ItemList({ items }) {
  return (
    <div>
      <h2>Daftar Item</h2>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada item yang tersedia saat ini.</p>
      )}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

 const messages = ['React', 'Re: React', 'Re:Re: React'];

 
 const [showWarning, setShowWarning] = React.useState(true);
  const [dataStatus, setDataStatus] = React.useState('loading');

  const toggleWarning = () => {
    setShowWarning(prev => !prev);
  };

  const changeStatus = () => {
    const statuses = ['loading', 'success', 'error', 'unknown'];
    const currentIndex = statuses.indexOf(dataStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setDataStatus(statuses[nextIndex]);
  };

  const availableItems = [
    { id: 1, name: 'Buku' },
    { id: 2, name: 'Pensil' },
    { id: 3, name: 'Penghapus' }
  ];
  const noItems = [];


  return (
    <>
      <div>
      <h2>Conditional Rendering dengan Ternary Operator</h2>
      {isLoggedIn ? (
        <p>Anda sudah login.</p>
      ) : (
        <p>Anda belum login.</p>
      )}
      <LoginButton
        isLoggedIn={isLoggedIn}
        onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}
      />
    </div>
      <div>
      <Mailbox unreadMessages={messages} />
      <Mailbox unreadMessages={[]} />
    </div>

     <div>
      <h2>Conditional Rendering dengan Switch Statement</h2>
      <WarningBanner warn={showWarning} />
      <button onClick={toggleWarning}>
        {showWarning ? 'Sembunyikan' : 'Tampilkan'} Peringatan
      </button>

      <hr />

      <h3>Status Data:</h3>
      <PageStatus status={dataStatus} />
      <button onClick={changeStatus}>Ubah Status</button>
    </div>
      <div>
        <ProductList />
      </div>
      <div>
        <BadTodoList />
      </div>

      <div>
      <ItemList items={availableItems} />
      <hr />
      <ItemList items={noItems} />
      </div>
    </>
  )
}

export default App
