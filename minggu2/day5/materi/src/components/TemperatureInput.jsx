// Komponen TemperatureInput adalah komponen "controlled" yang menerima dan menampilkan suhu.
// Props:
// - temperature: Nilai suhu yang akan ditampilkan.
// - onTemperatureChange: Fungsi callback yang dipanggil saat suhu berubah.
// - scale: Skala suhu ('c' untuk Celsius, 'f' untuk Fahrenheit).
function TemperatureInput({ temperature, onTemperatureChange, scale }) {
    // Objek untuk memetakan singkatan skala ('c', 'f') ke nama lengkapnya.
    const scaleName = {
        c: 'Celsius',
        f: 'Fahrenheit',
    };

    // Mengembalikan elemen JSX untuk ditampilkan.
    return (
        // Fieldset digunakan untuk mengelompokkan elemen-elemen dalam sebuah form.
        <fieldset style={{ // Inline style untuk memberikan tampilan visual pada fieldset.
            padding: '1rem', // Memberi jarak dalam di sekitar konten.
            border: '1px solid #ccc', // Menambahkan garis batas.
            borderRadius: '4px', // Membuat sudut sedikit melengkung.
            marginBottom: '1rem' // Memberi jarak di bawah fieldset.
        }}>
            {/* Legend memberikan judul untuk fieldset, judulnya dinamis sesuai skala. */}
            <legend>Masukkan suhu dalam {scaleName[scale]}</legend>
            {/* Input untuk pengguna memasukkan angka suhu. */}
            <input 
                className="border" // Class untuk styling (kemungkinan dari Tailwind CSS).
                type="number" // Memastikan input hanya menerima angka.
                value={temperature} // Nilai input dikontrol oleh state dari komponen induk.
                // Fungsi yang akan dipanggil setiap kali nilai input berubah.
                // Memanggil onTemperatureChange dari props dengan nilai baru dan skala saat ini.
                onChange={(e) => onTemperatureChange(e.target.value, scale)}
            />
        </fieldset>
    )

}

// Mengekspor komponen agar bisa digunakan di file lain.
export default TemperatureInput;