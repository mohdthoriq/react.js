// ThemedParagraph.jsx (Contoh consumer lain)
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedParagraph() {
  const { theme } = useContext(ThemeContext);
  const paragraphStyle = {
    color: theme === 'light' ? '#000' : '#fff',
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    padding: '10px',
    borderRadius: '5px'
  };
  return (
    <p style={paragraphStyle}>
      Ini adalah paragraf dengan tema {theme}.
    </p>
  );
}

export default ThemedParagraph;