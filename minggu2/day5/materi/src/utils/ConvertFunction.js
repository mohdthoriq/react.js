// Fungsi untuk mengonversi suhu dari Fahrenheit ke Celsius.
export function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

// Fungsi untuk mengonversi suhu dari Celsius ke Fahrenheit.
export function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

// Fungsi pembungkus (wrapper) yang mencoba melakukan konversi.
// Ini adalah fungsi kunci yang dipanggil dari komponen Calculator.
// - temperature: Nilai suhu dalam bentuk string yang didapat dari input.
// - convert: Fungsi konversi yang akan digunakan (bisa toCelsius atau toFahrenheit).
export function tryConvert(temperature, convert) {
    // Mengubah input string menjadi angka desimal (float).
    const input = parseFloat(temperature)
    // Jika input bukan angka (misalnya string kosong atau teks), kembalikan string kosong.
    if (Number.isNaN(input)) {
        return ''
    }
    // Panggil fungsi konversi yang diberikan (toCelsius/toFahrenheit) dengan input angka.
    const output = convert(input);
    // Bulatkan hasilnya hingga 3 angka di belakang koma untuk tampilan yang lebih rapi.
    const rounded = Math.round(output * 1000) / 1000;
    // Kembalikan hasil yang sudah dibulatkan sebagai string untuk ditampilkan di input.
    return rounded.toString();
}
