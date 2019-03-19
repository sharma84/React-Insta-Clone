import React from "react";

import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";

import LikeSection from "./LikeSection";

import "./Posts.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  
  incrementLike = () => {
      this.setState(prevState => {
        return { likes: prevState.likes + 1 };
      });
    };


render() {
  return (
    <div className="post-entire-content">
      <PostHeader
        thumbnailUrl={this.props.post.thumbnailUrl}
        username={this.props.post.username}
      />
      <div className="post-content-image">
        <img
          alt="post thumbnail"
          className="post-image"
          src={this.props.post.imageUrl}
        />
      </div>
      <LikeSection incrementLike={this.incrementLike} likes={this.state.likes} />
      <CommentSection comments={this.props.post.comments} />
    </div>
  );
};
}

Post.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.array
};

export default Post;