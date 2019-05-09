import React, { Component } from "react";

import "./Lamp.css";

class Lamp extends Component {
  state = {
    bgColor: ""
  };

  componentWillMount() {
    this.setState({ bgColor: this.props.lightColor });
  }

  componentDidMount() {
    // blinking
    if (this.props.blink) {
      this.blinker = setInterval(() => {
        this.setState({
          bgColor: this.state.bgColor === "" ? this.props.lightColor : ""
        });
      }, 500);
    } else {
      clearInterval(this.blinker);
    }
  }

  render() {
    return (
      <div
        className="lamp"
        style={{
          color: `${this.props.displayTextColor}`,
          backgroundColor: `${this.state.bgColor}`
        }}
      >
        {this.props.displayText.substring(0, 1).toUpperCase()}
      </div>
    );
  }
}

Lamp.defaultProps = {
  timer: 0,
  color: "",
  blink: false,
  displayText: "",
  displayTextColor: ""
};

export default Lamp;
