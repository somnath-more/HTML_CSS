import React, { Component } from "react";
import withCounter from "./withCounter";


// export default HoverCounter;
interface IProps {
  count: number;
  incrementCount: () => void;
}

class HoverCounter extends Component<IProps> {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5); // pass initial count value as 0
