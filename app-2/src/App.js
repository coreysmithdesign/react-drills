import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: ["300", "Mustang", "F150", "Neon", "Lightning McQueen", "Mator"],
    };
  }

  render() {
    console.log(this.state);
    let displayCars = this.state.cars.map((car, index) => {
      return <p key={index}>{car}</p>;
    });

    return <div className="App">{displayCars}</div>;
  }
}

export default App;
