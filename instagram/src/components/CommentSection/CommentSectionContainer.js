import React from "react";

import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: "" //add a comment box = empty
    };
  }

  changeComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  submitComment = (e) => {
    e.preventDefault();
    const newAddedComment = { text: this.state.comment, username: "Lambda" };
    const newCommentsArray = this.state.comments.slice();
    newCommentsArray.push(newAddedComment);
    this.setState({ comments: newCommentsArray, comment: "" });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.submitComment}
          changeComment={this.changeComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;