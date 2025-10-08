import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah refresh halaman
    console.log('Username:', username);
    console.log('Password:', password);
    alert(`Pendaftaran berhasil untuk username: ${username}`);
    // Di sini Anda bisa mengirim data ke API
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulir Pendaftaran</h2>
      <div>
        <label>
          Username:
          <input
            className='border-2 border-white'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            className='border-2 border-white'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Daftar</button>
    </form>
  );
}

export default RegistrationForm;