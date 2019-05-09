import React, { Component } from "react";
import Light from "./Light";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Light lightColor="red" timer={3} />
        <Light lightColor="yellow" blink={true} timer={3} />
        <Light lightColor="green" timer={3} />
        <Light displayText="Walk" displayTextColor="green" timer={5} />
      </div>
    );
  }
}

export default App;
