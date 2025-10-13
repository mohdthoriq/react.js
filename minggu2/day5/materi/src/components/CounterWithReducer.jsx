// Mengimpor hook useReducer dari React untuk manajemen state yang lebih kompleks.
import { useReducer } from "react"


// Fungsi reducer yang menentukan bagaimana state berubah sebagai respons terhadap sebuah action.
// Menerima state saat ini dan sebuah action, lalu mengembalikan state yang baru.
function CounterReducer(state, action) {
    // Switch statement untuk menangani berbagai jenis action berdasarkan properti 'type'.
    switch (action.type) {
        // Jika action type adalah 'increment', tambahkan 1 ke state count.
        case 'increment':
            return {count: state.count + 1}
        // Jika action type adalah 'decrement', kurangi 1 dari state count.
        case 'decrement':
            return {count: state.count - 1}
        // Jika action type adalah 'reset', kembalikan state count ke 0.
        case 'reset':
            return {count: 0}
        // Jika action type tidak dikenali, lemparkan error untuk debugging.
        default:
            throw new Error()
    }
}

// Komponen utama yang menggunakan useReducer untuk state counter.
export default function CounterWithReducer() {
    // Menginisialisasi state dengan useReducer.
    // `counterState` adalah state saat ini, dan `dispatch` adalah fungsi untuk mengirim action ke reducer.
    // Argumen kedua ({count: 0}) adalah nilai state awal.
    const [counterState, dispatch] = useReducer(CounterReducer, {count: 0})

    return (
        <>
        <div className="flex flex-col gap-4">
            <h1>Aplikasi Counter Sederhana</h1>

            <p>Count: {counterState.count}</p>

            <div className="flex gap-4 justify-center">
                {/* Tombol yang memanggil fungsi dispatch dengan action 'increment' saat diklik. */}
                <button onClick={() => dispatch({ type: "increment" })}>tambah</button>
                {/* Tombol yang memanggil fungsi dispatch dengan action 'decrement' saat diklik. */}
                <button onClick={() => dispatch({ type: "decrement" })}>kurang</button>
                {/* Tombol yang memanggil fungsi dispatch dengan action 'reset' saat diklik. */}
                <button onClick={() => dispatch({ type: "reset" })}>reset</button>
            </div>
        </div>
        </>
    )
}