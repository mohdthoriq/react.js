function Button({ children, onClick }) {
    const style = {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background-color 0.3s ease",
    }

    return (
        <button style={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
