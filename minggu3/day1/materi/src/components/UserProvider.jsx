// UserProvider.jsx
import React, { useState } from 'react';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Guest', isLoggedIn: false });

  const login = (username) => {
    setUser({ name: username, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ name: 'Guest', isLoggedIn: false });
  };

  const contextValue = { user, login, logout };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;