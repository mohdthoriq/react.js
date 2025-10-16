import React from 'react'
import useForm from '../hook/useForm'

const FormExample = ({ theme }) => {
  const { values, handleChange } = useForm({ name: '', email: '' })

  return (
    <div className={`p-6 rounded-lg ${theme.bg} ${theme.text} ${theme.border}`}>
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
      <div className={`mt-4 p-3 rounded ${theme.cardBg}`}>
        <p>Nama: {values.name}</p>
        <p>Email: {values.email}</p>
      </div>
    </div>
  )
}

export default FormExample
