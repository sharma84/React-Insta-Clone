import React from "react";
import "./Comment.css";

const Comment = (props) => {
  return (
    <div className="comment-content">
      <span className="comment-username">{props.comment.username}</span>
      <span className="comment-comment">{props.comment.text}</span>
    </div>
  );
};


export default Comment;
