import React, { Component } from "react";

import Lamp from "./Lamp";

class Light extends Component {
  shouldComponentUpdate(nextProps) {
    return !this.props.isTriggered && nextProps.isTriggered ? true : false;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.isTriggered ? (
          <Lamp
            order={this.props.order}
            timer={this.props.timer}
            blink={this.props.blink}
            lightId={this.props.lightId}
            lightColor={this.props.lightColor}
            displayText={this.props.displayText}
            displayTextColor={this.props.displayTextColor}
            onLampChange={this.props.handleLampChange}
          />
        ) : (
          <Lamp />
        )}
      </div>
    );
  }
}

export default Light;
