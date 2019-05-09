import React, { Component } from "react";

import datas from "./data.json";
import TrafficSignal from "./TrafficSignal";

class App extends Component {
  render() {
    const addTrafficSignals = () => {
      let signals = [];
      for (let i = 0; i < datas.length - 1; i++) {
        signals.push(
          <TrafficSignal
            key={i}
            trafficSignalId={i + 1}
            totalLights={datas[i].totalLights}
            lights={datas[i].lights}
          />
        );
      }
      return signals;
    };
    return <div className="app">{addTrafficSignals()}</div>;
  }
}

export default App;
