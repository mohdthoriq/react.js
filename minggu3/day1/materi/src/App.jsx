// App.jsx (Menggabungkan ThemeContext dan UserContext)
import React, { useContext } from 'react';
import ThemeProvider from './components/ThemeProvider'; // Dari contoh sebelumnya
import UserProvider from './components/UserProvider';
import ThemedButton from './components/ThemeButton'; // Dari contoh sebelumnya
import ThemedParagraph from './components/ThemedParagraph'; // Dari contoh sebelumnya
import UserInfoDisplay from './components/UserInfoDisplay';
import ThemeContext from './components/ThemeContext';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#121212',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s'
  };

  return (
    <div style={appStyle}>
      <h2>Aplikasi dengan Multiple Contexts</h2>
      <ThemedButton />
      <ThemedParagraph />
      <hr />
      <UserInfoDisplay />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider> {/* Provider pertama */}
      <UserProvider> {/* Provider kedua */}
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;