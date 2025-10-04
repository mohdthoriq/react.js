function Product(props) {
    const card = {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };

    const status = {
        color: props.isAvailable ? "green" : "red",
        fontWeight: "bold"
    }

    return (
        <div style={card}>
            <h2>{props.nama}</h2>
            <p>Harga: Rp{props.harga}</p>
            <p>Stock: {props.stock}</p>
            <p style={status}>
                {props.isAvailable ? "Tersedia" : "Habis"}
            </p>
            
        </div>
    )
}

Product.defaultProps = {
    nama: "produk baru",
    harga: 0,
    stock: 0,
    isAvailable: false
}

export default Product;
