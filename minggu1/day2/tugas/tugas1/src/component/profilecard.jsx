function Profilecard({nama, photo, bio, skills}) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            fontFamily: "Arial, sans-serif",
        }}>
        <img 
            src={photo} 
            alt={nama} 
            style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px"
            }}
         />
         <h2 style={{ margin: "12px 0 8px 0"}}>{nama}</h2>
         <p style={{ color: "#555", fontSize: "14px"}}>{bio}</p>

         <h3 style={{ marginTop: "16px"}}>Skills : </h3>
         <ul>
            {skills.map((skill, index) => (
                <li key ={index} style={{ fontSize: "14px", textAlign: "left", listStyle: "none", margin: "4px 0"}}>
                    {skill}
                </li>
            ))}
         </ul>
        </div>
    )
}

export default Profilecard;