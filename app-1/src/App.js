import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Type. Your text will be here.",
    };
  }

  // Update input
  handleChange(value) {
    this.setState({
      message: value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <span>{this.state.message}</span>
      </div>
    );
  }
}
