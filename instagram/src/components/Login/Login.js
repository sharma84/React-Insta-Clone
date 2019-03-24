import React, { Component } from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  width: 600px;
  background: gray;
  margin: 50px 0;
  padding: 10px;
  font-size: 1.2rem;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitLogin = () => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <LoginForm>
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
        </LoginForm>
      </div>
    );
  }
}

export default Login;
