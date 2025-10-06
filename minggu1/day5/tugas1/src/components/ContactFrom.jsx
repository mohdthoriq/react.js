import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
}


    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, value }  = e.target

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
        console.log(formData)
    }

  return (
    <>
      <form className="flex flex-col gap-4 justify-center text-left text-black font-bold bg-slate-500 p-4 rounded-lg">
        <h1 className="text-2xl font-bold text-black mb-6 text-center">Formulir Kontak</h1>
        <div>
            <label>First Name:</label><br />
            <input className="border-2 border-black p-1 rounded-md text-black w-full" type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
        </div>

        <div>
            <label>Last Name:</label><br />
            <input className="border-2 border-black p-1 rounded-md text-white w-full" type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
        </div>

        <div>
            <label>Email:</label><br />
            <input className="border-2 boreder-black p-1 rounded-md text-black w-full" type="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>

        <button className="cursor-pointer border-2 border-black p-1 rounded-md text-white" type="submit" onClick={handleSubmit}>Submit</button>
      </form>

      <div className="mt-4 text-black font-bold bg-slate-500 p-4 rounded-lg text-left">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Data</h2>
        <p>Nama Depan: {formData.firstName}</p>
        <p>Nama Belakang: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
      </div>
    </>
  )
}