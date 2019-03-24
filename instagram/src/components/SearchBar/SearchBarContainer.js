import React from "react";

import camera from "../../assets/camera.png";
import iglogo from "../../assets/iglogo.png";
import heart from "../../assets/heart.png";
import compass from "../../assets/compass.png";
import user from "../../assets/user.png";
// import "./SearchBar.css";

import styled from "styled-components";

const Header = styled.header`
  height: 80px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #3333;
  margin-top: 20px;
`;

const LogoHeader = styled.div`
  width: 300px;
`;

const IconHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoImage = styled.img`
  height: 30px;
  padding: 0 15px;
`;

const SearchBox = styled.div`
  margin: 0;
  padding-right: 80px;
`;

const Input = styled.input`
  text-align: center;
  border-radius: 5px;
  width: 250px;
  padding: 2px 10px;
  border: 1px solid gray;
  font-size: 1rem;
`;

const SearchBar = (props) => {
  return (
    <Header>
      <LogoHeader>
        <LogoImage alt="camera logo" src={camera} /> |
        <LogoImage alt="instagram logo" src={iglogo} />
      </LogoHeader>
      <SearchBox>
        <Input
          type="text"
          placeholder=" 🔍 Search"
          className="search"
          onKeyDown={props.searchPosts}
        />
      </SearchBox>
      <IconHeader>
        <LogoImage alt="compass logo" src={compass} />
        <LogoImage alt="heart logo" src={heart} />
        <LogoImage alt="user logo" src={user} />
      </IconHeader>
    </Header>
  );
};

export default SearchBar;
