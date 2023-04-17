import React, { Component } from "react";
interface IState {
  count: number;
}

class HoverTwo extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

 IncreamentCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2 onMouseOver={this.IncreamentCount}>Hovered {this.state.count} times</h2>
      </div>
    );
  }
}

export default HoverTwo