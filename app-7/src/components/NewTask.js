import React, { Component } from "react";

export default class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };

    this.handleAdd = this.handleAdd.bind(this);
    // this.handleEnter = this.handleEnter.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  // handleEnter(e) {
  //   if (e.key === "Enter") {
  //     this.props.add(this.state.input);
  //     this.setState({ input: "" });
  //   }
  // }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          placeholder="Enter new task"
          onChange={(e) => this.handleInputChange(e.target.value)}
          // onKeyDown={(e) => this.handleEnter(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}
