import React from "react";

import heart from "../../assets/heart.png";
import comment from "../../assets/comment.png";
import styled from "styled-components";

const Likes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  padding-top: 5px;
  padding-right: 5px;
  // &:active {
  //   background: red;
  // }
`;

const LikesLogo = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const LikeSection = (props) => {
  return (
    <Likes>
      <Logos key="likes-icons-container">
        <Logo src={heart} onClick={props.incrementLike} />
        <Logo alt="comment logo" src={comment} />
      </Logos>
      <LikesLogo key="likes-container"> {props.likes} Likes</LikesLogo>
    </Likes>
  );
};
export default LikeSection;
