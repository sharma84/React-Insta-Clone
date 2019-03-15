import React from "react";

const CommentInput = (props) => {
  return (
    <form>
      <input
        className="addacomment"
        type="text"
        placeholder="Add a comment... "
      />
      {/* add three dots */}
    </form>
  );
};

export default CommentInput;
