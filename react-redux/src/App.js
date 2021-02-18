import React from "react";
import ParticlesComponent from "./ParticlesComponent";
import "./index.css";
import './App.css';

import DogImage from "./components/DogImage";

function App() {
  return (
    <div
        className="App"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticlesComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <h1>Get Random Dog</h1>
          <DogImage />
          {/* You can render <Route> and <NavTabs /> here */}
        </div>
      </div>
  );
}

export default App;




