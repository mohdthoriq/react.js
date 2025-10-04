// DynamicButton.jsx
import React from 'react';

function DynamicButton({ variant, size, children, onClick }) {
  const getButtonStyle = () => {
    const baseStyle = {
      border: 'none',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'all 0.3s ease'
    };

    // Variants
    const variants = {
      primary: { backgroundColor: '#007bff', color: 'white' },
      secondary: { backgroundColor: '#6c757d', color: 'white' },
      danger: { backgroundColor: '#dc3545', color: 'white' },
      light: { backgroundColor: '#f8f9fa', color: '#212529', border: '1px solid #dee2e6' }
    };

    // Sizes
    const sizes = {
      small: { padding: '6px 12px', fontSize: '0.875rem' },
      medium: { padding: '8px 16px', fontSize: '1rem' },
      large: { padding: '12px 24px', fontSize: '1.25rem' }
    };

    return {
      ...baseStyle,
      ...variants[variant],
      ...sizes[size]
    };
  };

  return (
    <button style={getButtonStyle()} onClick={onClick}>
      {children}
    </button>
  );
}

export default DynamicButton;