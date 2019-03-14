import React from "react";
import Comment from "./Comment";

const CommentSection = (props) => {
  return (
    <div>
      {props.comments.map((comment) => (
        <Comment comment={comment} />
      ))}

      <form>
        <textarea placeholder="Add comment..." />
      </form>
    </div>
  );
};

export default CommentSection;
