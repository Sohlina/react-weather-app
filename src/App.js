import React from "react"
import './App.css';
import Search from "./Search";
import CurrentCity from "./CurrentCity";

function App() {
  return (
    <div className="App">
        <h1>React Weather App</h1><br />
        <Search />
        <CurrentCity />
    </div>
  );
}

export default App;
