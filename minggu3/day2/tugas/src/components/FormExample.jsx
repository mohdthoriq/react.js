import React from 'react'
import useForm from '../hook/useForm'

const FormExample = ({ theme }) => {
  const { values, handleChange } = useForm({ name: '', email: '' })

  return (
    <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${theme.cardBg} ${theme.text}`}>
      <h3 className="text-xl font-bold mb-4">Tugas 4</h3>
      <form className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={values.name}
          onChange={handleChange}
          className={`p-2 rounded w-full ${theme.input}`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          className={`p-2 rounded w-full ${theme.input}`}
        />
      </form>
      <div className={`mt-4 p-3 rounded bg-opacity-50 ${theme.bg}`}>
        <p>Nama: {values.name}</p>
        <p>Email: {values.email}</p>
      </div>
    </div>
  )
}

export default FormExample
