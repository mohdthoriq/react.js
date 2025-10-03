function Expresi () {
    const price = 100000
    const discount = 0.2
    const hasil = price - price * discount

    const user = "Thoriq"
    const greet = (nama) => `halo, ${nama}! selamat datang di React.`

    const text = "React.js"

    return (
        <div style={{fontFamily: "Arial", margin: "20px" }}>
            <h2>Belajar JSX expressions</h2>

            {/* {operasi matematika} */}

            <p>Harga awal: {price}</p>
            <p>Diskon: {discount * 100}%</p>
            <p>
                harga setelah diskon:{""}
                <strong style={{ color: "green"}}>Rp {hasil}</strong>
            </p>

            {/* {pemanggilan fungsi} */}
            <p>{greet(user)}</p>

            {/* {manipulasi string} */}
            <p>Nama file: {text.toUpperCase()}</p>

        </div>
    )
}

export default Expresi;