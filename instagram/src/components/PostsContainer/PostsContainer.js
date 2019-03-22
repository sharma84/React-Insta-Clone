import React from "react";

import Post from "./Post";
import styled from "styled-components";

const PostBox = styled.div`
  height: 100%;
  width: 70%;
  margin-left: 200px;
  margin-top: 10px;
`;

const PostsContainer = (props) => {
  return (
    <PostBox>
      {props.posts.map((p) => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </PostBox>
  );
};

export default PostsContainer;