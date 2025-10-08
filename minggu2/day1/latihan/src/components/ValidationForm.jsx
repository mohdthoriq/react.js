import React, { useState } from 'react';

function ValidationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      setEmailError('Email harus mengandung karakter "@"');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password minimal 6 karakter');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail); // Validasi real-time
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword); // Validasi real-time
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi akhir sebelum submit
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError && email && password) {
      alert('Formulir berhasil disubmit!');
      console.log({ email, password });
      // Lakukan sesuatu dengan data
    } else {
      alert('Mohon perbaiki kesalahan dalam formulir.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulir dengan Validasi</h2>
      <div>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        {emailError && <p style={{ color: 'red', fontSize: '0.8em' }}>{emailError}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        {passwordError && <p style={{ color: 'red', fontSize: '0.8em' }}>{passwordError}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default ValidationForm;