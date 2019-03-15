import React from "react";

import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";
import heart from "../../assets/heart.png";
import comment from "../../assets/comment.png";

import "./Posts.css";

const Post = (props) => {
  return (
    <div className="post-entire-content">
      <PostHeader
        thumbnailUrl={props.post.thumbnailUrl}
        username={props.post.username}
      />
      <div className="post-content-image">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <div className="logo">
        <img alt="heart logo" src={heart} className="heart-logo" />
        <img alt="comment logo" src={comment} className="comment-logo" />
      </div>
      <div className="post-content-likes">{props.post.likes} likes</div>
      {/* <div className="comment-timestamp">{props.post.timestamp}</div> */}
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

Post.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.array
};

export default Post;
