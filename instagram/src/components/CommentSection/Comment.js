import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
`;

const ContentWrapper = styled.div`
  padding: 3px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const UsernameDiv = styled.div`
  height: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const CommentDiv = styled.div`
  font-weight: normal;
  font-size: 1rem;
  padding-left: 5px;
`;

const Comment = (props) => {
  return (
    <CommentBox>
      <ContentWrapper>
        <UsernameDiv>{props.comment.username}</UsernameDiv>
        <CommentDiv>{props.comment.text}</CommentDiv>
      </ContentWrapper>
    </CommentBox>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
