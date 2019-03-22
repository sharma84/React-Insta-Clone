import React from "react";

import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const UserThumbnail = styled.img`
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Username = styled.div`
  height: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const PostHeader = (props) => {
  return (
    <ContentWrapper>
      <UserThumbnail alt="post header" src={props.thumbnailUrl} />
      <Username>{props.username}</Username>
    </ContentWrapper>
  );
};

export default PostHeader;
