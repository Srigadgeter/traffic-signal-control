import React, { Component } from "react";

import "./TrafficSignal.css";
import Light from "./Light";

class TrafficSignal extends Component {
  lampChange = 0;
  TRIGGERS_ARRAY = [];

  state = {
    triggerArray: Array(this.props.totalLamps).fill(false)
  };

  componentWillMount() {
    // order of glowing the lights
    let orders = [];
    let indexes = [];

    for (let i = 0; i < this.props.totalLights; i++) {
      if (this.props.lights[i].order !== undefined) {
        orders.push(this.props.lights[i].order);
      }
      // console.log("orders", orders);
    }

    orders.forEach((element, index) => {
      indexes.push(orders.indexOf(index + 1));
    });
    // console.log("indexes", indexes);

    indexes.forEach(element => {
      let arr = Array(this.props.totalLights).fill(false);
      arr.fill(true, element, element + 1);
      this.TRIGGERS_ARRAY.push(arr);
    });
    // console.log(this.TRIGGERS_ARRAY);

    if (this.lampChange < this.props.totalLights) {
      this.setState({
        triggerArray: this.TRIGGERS_ARRAY[this.lampChange]
      });
    }
  }

  handleLampChange = () => {
    console.log(
      ">>>>>>>>>> i came to trafficSignal.js this.handleLampChange function"
    );
    this.lampChange =
      this.lampChange < this.props.totalLights - 1 ? this.lampChange + 1 : 0;
    this.setState({
      triggerArray: this.TRIGGERS_ARRAY[this.lampChange]
    });
  };

  render() {
    const drawLights = () => {
      let lightCollections = [];
      for (let i = 0; i < this.props.totalLights; i++) {
        lightCollections.push(
          <Light
            key={`light${i}`}
            lightId={`light${i}`}
            isTriggered={this.state.triggerArray[i]}
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
                : this.props.lights[i].displayText.substring(0, 1).toUpperCase()
            }
            displayTextColor={
              this.props.lights[i].displayTextColor === undefined
                ? ""
                : this.props.lights[i].displayTextColor
            }
            handleLampChange={this.handleLampChange}
          />
        );
      }
      return lightCollections;
    };

    return (
      <div className="trafficSignal">
        <span className="title">TS {this.props.trafficSignalId}</span>
        <div className="lightContainer">{drawLights()}</div>
        <div className="countdownPanel">{0}</div>
      </div>
    );
  }
}

export default TrafficSignal;
