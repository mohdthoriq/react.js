// Fungsi untuk mengonversi dari Kilogram ke Gram.
export function toGram(kilogram) {
    return kilogram * 1000;
}

// Fungsi untuk mengonversi dari Gram ke Kilogram.
export function toKilogram(gram) {
    return gram / 1000;
}

// Fungsi pembungkus (wrapper) generik yang mencoba melakukan konversi.
// - value: Nilai dalam bentuk string yang didapat dari input.
// - convert: Fungsi konversi yang akan digunakan (bisa toGram atau toKilogram).
export function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    // Bulatkan untuk menghindari angka desimal yang sangat panjang.
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}