import React, { Component } from "react";

import dummyData from "../../dummy-data";
import PostsContainer from "./PostsContainer";
import SearchBar from "../SearchBar/SearchBarContainer";

class PostsPage extends Component {
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
    // eslint-disable-next-line
    const matchedPostsAfterSearch = this.state.posts.filter((p) => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ matchedPosts: matchedPostsAfterSearch });
    //matchedPostsAfterSearch is a value in key:value
  };

  render() {
    return (
      <div>
        <SearchBar searchPosts={this.searchBarHandler} />
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

export default PostsPage;