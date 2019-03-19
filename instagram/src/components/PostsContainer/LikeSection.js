import React from 'react';
import heart from "../../assets/heart.png";
import comment from "../../assets/comment.png";

const LikeSection = props => {
    return (
    <div className= "logos" key="likes-icons-container" >
        <div className="logo" key="likes-icons-container">
            <img alt="heart logo" src={heart} className="heart-logo" onClick={props.incrementLike} />
            <img alt="comment logo" src={comment} className="comment-logo" />
      </div>
            <div className="likes-logo" key="likes-container"> {props.likes} Likes</div>
        
    </div>
    );
}
export default LikeSection;