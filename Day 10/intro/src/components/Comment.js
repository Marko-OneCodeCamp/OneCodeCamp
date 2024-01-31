import React from 'react';
const Comment = ({ comments }) => {
    return (
        <div>
        {comments.map(comment => (
            <div key={comment.id} className="comment-container">
                <img src={`../assets/img/${comment.profilePic}`} alt="Profile" className="profile-pic" />
                <div className="comment-content">
                    <div className="user-info">
                        <span className="username">{comment.username}</span>
                        <span className="timestamp">{formatTimestamp(comment.timestamp)}</span>
                    </div>
                    <div className="text-container">
                        <p className="comment-text">{comment.text}</p>
                    </div>
                </div>
            </div>
            
        ))}
        </div>
    );
};

const formatTimestamp = timestamp => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

export default Comment;
