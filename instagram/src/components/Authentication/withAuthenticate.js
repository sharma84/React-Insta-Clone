import React from 'react';


// const withAuthenticate = App => {
const withAuthenticate = PostsPage => LoginPage => 
class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         loggedIn: false   //boolean flag
        };
    }

    componentDidMount (){




    }
//check local storage

render () {
if (this.state.loggedIn) return <PostsPage />;
    return <LoginPage />
    // return <PostsPage />
    }
};


export default withAuthenticate;