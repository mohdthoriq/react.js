function ProfileBox(props) {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5e0e0eff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }
    const imageStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '20px',
        marginBottom: '10px',
    }
    const nameStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '5px',
    }
    const bioStyle = {
        fontSize: '16px',
        marginBottom: '10px',
    }

    return (
      <div style={containerStyle}>
        <img src={props.image} alt={props.name} style={imageStyle} />
        <h2 style={nameStyle}>{props.name}</h2>
        <p style={bioStyle}>{props.bio}</p>
      </div>
    )
}

export default ProfileBox;