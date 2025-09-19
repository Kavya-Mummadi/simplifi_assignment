import "./index.css"

const UserCard = ({ user }) => {
    const avatarUrl = `https://api.dicebear.com/6.x/avataaars/svg?seed=${user.username}&mood=happy`;

    return (
        <div className="user-card-bg">
            <img
                src={avatarUrl}
                alt={`${user.username} avatar`}
                className="user-avatar"
            />
            <div>
                <p className="user-info"><span className="user-detail-name">Name: </span>{user.name}</p>
                <p className="user-info"><span className="user-detail-name">Username: </span>@{user.username}</p>
                <p className="user-info"><span className="user-detail-name">Email: </span>{user.email}</p>
                <p className="user-info"><span className="user-detail-name">Company Name: </span>{user.company.name}</p>
                <p className="user-info"><span className="user-detail-name">Phone: </span>{user.phone}</p>
            </div>
        </div>
    );
};

export default UserCard;
