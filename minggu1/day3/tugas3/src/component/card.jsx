function Card({ children }) {
    const style = {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        width: "300px",
        margin: "16px",
        // backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Card;

