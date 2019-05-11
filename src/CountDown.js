import React, { Component } from "react";

class CountDown extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.setState({
      count: this.props.startCount
    });
    this.counting();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.startCount
    });
    this.counting();
  }

  counting = () => {
    this.counter = setInterval(() => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1
        });
      } else {
        clearInterval(this.counter);
      }
    }, 1000);
  };

  render() {
    return <div className="countdownPanel">{this.state.count}</div>;
  }
}

CountDown.defaultProps = {
  startCount: 0
};

export default CountDown;
