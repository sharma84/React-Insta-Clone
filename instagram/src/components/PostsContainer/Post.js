import React from "react";

import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";
import LikeSection from "./LikeSection";
import styled from "styled-components";

const PostEntireContent = styled.div`
  margin: 15px -160px;
  width: 100%;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostContentImage = styled.div`
  height: 100%;
  width: 100%;
`;

const PostImage = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLike = () => {
    this.setState((prevState) => {
      return { likes: prevState.likes + 1 };
    });
  };

  render() {
    return (
      <PostEntireContent>
        <PostHeader
          thumbnailUrl={this.props.post.thumbnailUrl}
          username={this.props.post.username}
        />
        <PostContentImage>
          <PostImage alt="post thumbnail" src={this.props.post.imageUrl} />
        </PostContentImage>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection comments={this.props.post.comments} />
      </PostEntireContent>
    );
  }
}

Post.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.array
};

export default Post;
