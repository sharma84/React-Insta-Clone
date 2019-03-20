import React from "react";

const CommentInput = (props) => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        className="addacomment"
        type="text"
        placeholder="Add a comment... "
        value={props.comment} 
        onChange={props.changeComment} 
      />
      {/* add three dots */}
    </form>
  );
};

export default CommentInput;
