function Button(props) {
  // Destructuring props untuk kode yang lebih bersih dan memberikan nilai default
  const { color = 'gray', text, onClick } = props;
    
  return (
    <button onClick={onClick} style={{ 
      backgroundColor: color, 
      color: 'white', 
      padding: '10px 20px', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer' 
    }}>
      {text}
    </button>
  )
}
  
  export default Button
