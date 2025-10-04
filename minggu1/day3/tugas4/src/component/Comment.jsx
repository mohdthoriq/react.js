import UserInfo from "./UserInfo.jsx";
import CommentText from "./CommentText.jsx";


function Comment ({ user, text, date}) {
    const style = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        maxWidth: "300px",
        margin: "10px auto",
        backgroundColor: "#f5f5f5"
    }

    return (
        <div style={style}>
            <UserInfo user={user}/>
            <CommentText text={text}/>
            <small style={{ color: "#888"}}>{date}</small>
        </div>
    )
}

export default Comment;