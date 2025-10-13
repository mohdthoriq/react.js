import { useState } from "react";
import { toGram, toKilogram, tryConvert } from "../utils/ConvertFunction";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
    // Mengganti nama state agar lebih sesuai: value (nilai) dan unit (satuan)
    const [value, setValue] = useState('')
    const [unit, setUnit] = useState('kg')


    // Handler untuk input Kilogram
    const handleKilogramChange = (inputValue) => {
        setValue(inputValue)
        setUnit('kg')
    }

    // Handler untuk input Gram
    const handleGramChange = (inputValue) => {
        setValue(inputValue)
        setUnit('g')
    }

    // Logika konversi: jika unit asal adalah gram, konversi ke kilogram. Jika tidak, biarkan.
    const kilogram = unit === 'g' ? tryConvert(value, toKilogram) : value
    // Logika konversi: jika unit asal adalah kilogram, konversi ke gram. Jika tidak, biarkan.
    const gram = unit === 'kg' ? tryConvert(value, toGram) : value

    return (
        <>
        <div className="border p-4 rounded-lg mb-4"> 
            <h1>( Tugas 1 )</h1>
            {/* Input untuk Kilogram */}
            <TemperatureInput scale='kg' temperature={kilogram} onTemperatureChange={handleKilogramChange} />
            {/* Input untuk Gram */}
            <TemperatureInput scale='g' temperature={gram} onTemperatureChange={handleGramChange} />
            <p>{kilogram || 0} kg = {gram || 0} g</p>
        </div>
        </>
    )
}