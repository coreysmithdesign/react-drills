import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      list: [],
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      input: value,
    });
  }

  handleAddTask(value) {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: "",
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            type="text"
            value={this.state.input}
            placeholder="Enter new todo"
            onChange={(e) => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>Add</button>
        </div>

        {list}
      </div>
    );
  }
}
