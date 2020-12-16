import React from "react";

const CommentBox = ({ comment }) => {
  return (
    <div className="comment-box">
      <p className="comment-name">{comment.user.firstName}</p>
      <p className="comment-detail">{comment.title}</p>
    </div>
  );
};

export default CommentBox;
