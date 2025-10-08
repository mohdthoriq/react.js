import React from 'react';

function LinkPreventer() {
  const handleClick = (event) => {
    // Mencegah perilaku default dari link (yaitu, navigasi ke URL)
    event.preventDefault();
    console.log('Link diklik, tapi navigasi dicegah!');
    alert('Anda mencoba mengklik link, tapi saya mencegahnya!');
  };

  const handleInputChange = (event) => {
    // event.target mengacu pada elemen DOM yang memicu event
    console.log('Nilai input:', event.target.value);
  };

  return (
    <div>
      <h2>SyntheticEvent Objects</h2>
      <a href="https://www.google.com" onClick={handleClick}>
        Klik Saya (Navigasi Dicegah)
      </a>
      <br /><br />
      <input type="text" onChange={handleInputChange} placeholder="Ketik sesuatu..." />
    </div>
  );
}

export default LinkPreventer;