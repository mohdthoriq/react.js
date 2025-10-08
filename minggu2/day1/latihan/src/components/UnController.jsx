import React, { useRef } from 'react';

function UncontrolledNameForm() {
  const nameInputRef = useRef(null); // Membuat ref

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mengakses nilai input melalui ref
    alert('Nama yang disubmit (Uncontrolled): ' + nameInputRef.current.value);
    nameInputRef.current.value = ''; // Mengosongkan input secara manual
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Component</h2>
      <label>
        Nama:
        <input type="text" ref={nameInputRef} defaultValue="John Doe" /> {/* Menggunakan ref */}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledNameForm;