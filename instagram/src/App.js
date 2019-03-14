import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map((post) => (
          <PostContainer post={post} />
        ))}
      </div>
    );
  }
}

export default App;
