export default function TemperatureInput({ temperature, onTemperatureChange, scale }) {
    const scaleName = {
        kg: 'Kilogram',
        g: 'Gram',
    };

    return (
        <>
        <div className="flex flex-col items-center">
            <fieldset className="border p-4 w-1/2 mt-4 mb-4 flex flex-col items-center justify-center">
                <legend>Masukkan berat dalam {scaleName[scale]}</legend>
                <input 
                    className="border"
                    type="number"
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e.target.value, scale)}
                />
            </fieldset>
        </div>
        </>
    )
}