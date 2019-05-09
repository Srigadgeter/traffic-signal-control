import React, { Component, Fragment } from "react";

import "./TrafficSignal.css";
import Light from "./Light";

class TrafficSignal extends Component {
  render() {
    const drawLights = () => {
      let lightCollections = [];
      for (let i = 0; i < this.props.totalLights; i++) {
        lightCollections.push(
          <Light
            order={
              this.props.lights[i].order === undefined
                ? ""
                : this.props.lights[i].order
            }
            timer={
              this.props.lights[i].timer === undefined
                ? ""
                : this.props.lights[i].timer
            }
            blink={
              this.props.lights[i].blink === undefined
                ? ""
                : this.props.lights[i].blink
            }
            lightColor={
              this.props.lights[i].lightColor === undefined
                ? ""
                : this.props.lights[i].lightColor
            }
            displayText={
              this.props.lights[i].displayText === undefined
                ? ""
                : this.props.lights[i].displayText
            }
            displayTextColor={
              this.props.lights[i].displayTextColor === undefined
                ? ""
                : this.props.lights[i].displayTextColor
            }
          />
        );
      }
      return lightCollections;
    };
    return (
      <div className="trafficSignal">
        <span className="title">TS {this.props.trafficSignalId}</span>
        <div className="lightContainer">{drawLights()}</div>
        <div className="countdownPanel">{20}</div>
      </div>
    );
  }
}

export default TrafficSignal;
