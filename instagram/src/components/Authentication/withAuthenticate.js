import React from "react";

// const withAuthenticate = App => {
const withAuthenticate = (PostsPage) => (LoginPage) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false 
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    
   
    // componentWillUnmount() {
    //   localStorage.clear();
    // }

    render() {
      if (this.state.loggedIn) return <PostsPage />;
      return <LoginPage />;
      // return <PostsPage />
    }
  };

export default withAuthenticate;
