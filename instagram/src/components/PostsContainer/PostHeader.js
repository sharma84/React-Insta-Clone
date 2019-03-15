import React from "react";

import "./Posts.css";

const PostHeader = (props) => {
  return (
    <div className="post-header-wrapper">
      <img
        alt="post header"
        className="post-header-thumb"
        src={props.thumbnailUrl}
      />
      <div className="post-header-username">{props.username}</div>
    </div>
  );
};

export default PostHeader;
