// UserInfoDisplay.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';
import ThemeContext from './ThemeContext';

function UserInfoDisplay() {
  const { user, login, logout } = useContext(UserContext);
  const { theme } = useContext(ThemeContext)

  const bgButton = {
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#333' : '#eee',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }

  return (
    <div>
      <p>Selamat datang, {user.name}!</p>
      {user.isLoggedIn ? (
        <button onClick={logout} style={bgButton}>Logout</button>
      ) : (
        <button onClick={() => login('Alice')} style={bgButton}>Login sebagai Alice</button>
      )}
    </div>
  );
}
export default UserInfoDisplay;