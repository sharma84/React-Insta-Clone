import React from "react";

import CommentSection from "../CommentSection/CommentSection";
import Post from "./Post";

const PostContainer = (props) => {
  return (
    <div>
      <Post post={props.post} />
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default PostContainer;
