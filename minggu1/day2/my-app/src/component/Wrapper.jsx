function Wrapper(props) {
    
  return (
    <div style={{ 
      backgroundColor: props.color, 
      padding: '20px', 
      borderRadius: '8px', 
      margin: '20px 0' 
    }}>
      {props.children}
    </div>
  );
  }
  
  export default Wrapper;
  