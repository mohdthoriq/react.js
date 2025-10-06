import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`data yang disubmit: ${JSON.stringify(formData)}`);
    alert(`data yang disubmit: ${JSON.stringify(formData.firstName)}! data telah disubmit`);
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    })
  }


  return ( 
    <div className='bg-slate-500 p-4 rounded-lg'>
      <form onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold text-center text-black mb-6'>Formulir Kontak</h2>
        <div className='mt-6 text-left'>
          <label>Nama Depan: </label>
          <input 
              type="text"
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
         />
        </div>
        <div className='mt-6 text-left'>
          <label>Nama Belakang: </label>
          <input 
              type="text"
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
         />
        </div>
        <div className='mt-6 mb-6 text-left'>
          <label>email: </label>
          <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
           />
        </div>
        <div className='flex justify-around mb-6'>
              <button type='submit'>submit</button>
              <button onClick={resetForm}>reset</button>
        </div>
        <p>Current Data: {JSON.stringify(formData)}</p>
      </form>
    </div> 
  )
}

export default App;
