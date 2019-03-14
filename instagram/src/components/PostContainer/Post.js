import React from "react";

const Post = (props) => {
  return (
    <div>
      <img src={props.post.thumbnailUrl} alt="url" />
      <p>{props.post.username}</p>
      <img src={props.post.imageUrl} alt="url" />
      <p>{props.post.likes}</p>
    </div>
  );
};

export default Post;
