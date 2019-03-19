import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import SearchBar from "./components/SearchBar/SearchBarContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // posts: dummyData
      posts: [],
      matchedPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchBarHandler = (e) => {
    const posts = this.state.posts.filter((p) => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ matchedPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.state.searchBarHandler}
          searchTerm={this.state.searchTerm}
        />
        {/* <PostsContainer posts={this.state.posts} /> */}
        <PostsContainer
          posts={
            this.state.matchedPosts.length > 0
              ? this.state.matchedPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default App;
