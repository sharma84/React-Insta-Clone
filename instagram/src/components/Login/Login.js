import React, { Component } from "react";

//In your components directory, create a directory called Login and add a new file called Login.js.
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange =e => {
    this.setState ({ [e.target.name]: e.target.value})
  };

  // submitLogin = e => {
  //   const user =this.state.username;
  // }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password" 
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button onClick={this.submitLogin}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
