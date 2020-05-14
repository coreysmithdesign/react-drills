import React from "react";
import "./App.css";
import Cowabunga from "./Cowabunga";
import Image from "./Image";

function App() {
  return (
    <div className="App">
      <Cowabunga />
      <Image
        url={
          "https://img1.looper.com/img/gallery/things-only-adults-notice-in-the-teenage-mutant-ninja-turtles-cartoon/intro-1519911106.jpg"
        }
      />
    </div>
  );
}

export default App;
