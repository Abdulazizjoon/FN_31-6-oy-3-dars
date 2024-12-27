import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
import data from "./components/user.json";
function App() {
  return (
    <div className="container">
      <div className="cards">
        {data.length >= 0 &&
          data.map((value, index) => {
            return <Card data={value} key={index} />;
          })}
      </div>
    </div>
  );
}

export default App;




