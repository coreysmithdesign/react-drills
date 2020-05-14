import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      cars: [
        "Mystery Van",
        "Elantra",
        "Pinto",
        "Smart",
        "Hummer",
        "Honda",
        "Hyundai",
      ],
    };
  }

  filterEvent(filter) {
    this.setState({
      filterString: filter,
    });
  }

  render() {
    console.log(this.state);

    let listOfCars = this.state.cars
      .filter((car, index) => {
        return car.includes(this.state.filterString);
      })
      .map((car, index) => {
        return <h2 key={index}>{car}</h2>;
      });

    return (
      <div className="App">
        <input type="text" onChange={(e) => this.filterEvent(e.target.value)} />
        {listOfCars}
      </div>
    );
  }
}
