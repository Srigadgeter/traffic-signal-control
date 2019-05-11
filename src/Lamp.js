import React, { Component } from "react";

import "./Lamp.css";

class Lamp extends Component {
  timerId = 0;
  glowTime = 0;
  clearToken = 0;

  state = {
    reference: ""
  };

  componentDidMount() {
    // glowing
    if (this.props.lightColor !== "" && this.props.displayText === "") {
      this.setState({ reference: this.props.lightColor });
    } else if (this.props.displayText !== "" && this.props.lightColor === "") {
      this.setState({ reference: this.props.displayText });
    }

    this.glowTime = this.props.timer;
  }

  componentWillReceiveProps(nextProps) {
    // glowing
    if (nextProps.lightColor !== "") {
      if (nextProps.lightColor !== "" && nextProps.displayText === "") {
        this.setState({ reference: nextProps.lightColor });
      }
    }

    if (nextProps.displayText !== "") {
      if (nextProps.displayText !== "" && nextProps.lightColor === "") {
        this.setState({ reference: nextProps.displayText });
      }
    }

    if (nextProps.timer !== 0) {
      this.glowTime = nextProps.timer;
    }

    this.clearToken = 0;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.reference !== prevState.reference) {
      this.timerId = setTimeout(this.coloring, 500);
    }
  }

  coloring = () => {
    if (this.glowTime > 0) {
      // blinking
      this.glowTime -= 0.5;
      // console.log("this.glowTime", this.glowTime, "of", this.props.lightId);
      if (this.props.blink) {
        if (this.props.lightColor !== "" && this.props.displayText === "") {
          this.setState({
            reference: this.state.reference === "" ? this.props.lightColor : ""
          });
        } else if (
          this.props.displayText !== "" &&
          this.props.lightColor === ""
        ) {
          this.setState({
            reference: this.state.reference === "" ? this.props.displayText : ""
          });
        }
        this.timerId = setTimeout(this.coloring, this.props.timer * 1000);
      } else this.timerId = setTimeout(this.coloring, 500);
    } else if ((this.clearToken < 1) & (this.glowTime === 0)) {
      clearTimeout(this.timerId);
      this.clearToken += 1;
      this.setState({ reference: "" });
      this.props.onLampChange();
    }
  };

  render() {
    return (
      <div
        className="lamp"
        style={{
          color: `${this.props.displayTextColor}`,
          backgroundColor: `${this.state.reference}`
        }}
      >
        {this.props.displayText !== "" && this.props.lightColor === ""
          ? this.state.reference
          : ""}
      </div>
    );
  }
}

Lamp.defaultProps = {
  order: 0,
  timer: 0,
  blink: false,
  lightColor: "",
  displayText: "",
  displayTextColor: ""
};

export default Lamp;
