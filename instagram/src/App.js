import React, { Component } from "react";
import "./App.css";

import withAuthenticate from "./components/Authentication/withAuthenticate";
import PostsPage from "./components/PostsContainer/PostsPage";
import LoginPage from "./components/Login/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {/* <PostsPage /> */}
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);
//higherOrderComp(FirstComponent)(SecondComponent)
export default App;
