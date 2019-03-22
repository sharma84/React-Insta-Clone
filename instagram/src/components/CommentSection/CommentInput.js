import React from "react";

import styled from "styled-components";

const Input = styled.input`
  margin-top: 30px;
  width: 100%;
  padding: 30px 10px;
  font-weight: bold;
  border: none;
  font-size: 1rem;
  color: lightgray;
  border-top: 1px solid lightgrey;
`;

const CommentInput = (props) => {
  return (
    <Input
      onSubmit={props.submitComment}
      type="text"
      placeholder="Add a comment... "
      value={props.comment}
      onChange={props.changeComment}
    />
    // add three dots 
  );
};

export default CommentInput;