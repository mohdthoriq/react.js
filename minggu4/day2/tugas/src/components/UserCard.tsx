interface user {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

interface UserCardProps {
    user: user;
    onToggleActive: ( id: number ) => void
}

export const UserCard = ({ user, onToggleActive }: UserCardProps ) => {
    return (
        <>
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>Status: {user.isActive ? 'Active' : 'InActive'}</p>
                <button onClick={() => onToggleActive(user.id)}>
                    Toggle Status
                </button>
            </div>
        </>
    )
}