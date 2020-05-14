import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      username: "",
      password: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleNameChange(name) {
    this.setState({ name: name });
  }

  handleUsernameChange(name) {
    this.setState({ username: name });
  }

  handlePasswordChange(pass) {
    this.setState({ password: pass });
  }

  handleLogin() {
    alert(
      `Welcome ${this.state.name}! Your username: ${this.state.username} Your password: ${this.state.password}`
    );
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.handleNameChange(e.target.value)}
          placeholder="enter name"
        />
        <input
          type="text"
          onChange={(e) => this.handleUsernameChange(e.target.value)}
          placeholder="enter username"
        />
        <input
          type="text"
          onChange={(e) => this.handlePasswordChange(e.target.value)}
          placeholder="enter password"
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
