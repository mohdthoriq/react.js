import Avatar from "./avatar.jsx"

function UserInfo ({ user }) {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10px",
    }

    return (
        <div style={style}>
            <Avatar user={user} />
            <span style={{ fontWeight: "bold", fontSize: "16px", color: "#333"}}>{user.name}</span>
        </div>
    )
}

export default UserInfo
