import React, { Component, ComponentType } from "react";

interface State {
  count: number;
}

const withCounter = <P extends object>(
  WrappedComponent: ComponentType<P>,
  initialValue: number
) => {
  class WithCounter extends Component<P, State> {
    constructor(props: P) {
      super(props);
      this.state = {
        count: initialValue,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + initialValue, }));
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          {...(this.props as P)}
          count={count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
