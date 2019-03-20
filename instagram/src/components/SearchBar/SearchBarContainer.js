import React from "react";

import camera from "../../assets/camera.png";
import iglogo from "../../assets/iglogo.png";
import heart from "../../assets/heart.png";
import compass from "../../assets/compass.png";
import user from "../../assets/user.png";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-container">
      <div className="logo">
        <img alt="camera logo" src={camera} className="camera-logo" />
        <img alt="instagram logo" src={iglogo} className="insta-logo" />
      </div>
      <input
        type="text"
        placeholder=" 🔍 Search"
        className="search"
        onKeyDown={props.searchPosts}
 
      />
      <div className="icon">
        <img alt="compass logo" src={compass} className="compass-icon" />
        <img alt="heart logo" src={heart} className="heart-icon" />
        <img alt="user logo" src={user} className="user-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
