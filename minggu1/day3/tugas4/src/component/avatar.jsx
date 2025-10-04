function Avatar ({ user }) {
    const style = {
        width: "100%",
        height: "100%"
    }
    // Menggunakan user.avatarURL, bukan user.avatar
    return <img src={user.avatarURL} style={style} alt={user.name} />
}

export default Avatar;