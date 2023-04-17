// import React, { Component } from "react";

// interface State {
//   count: number;
// }

// class ClickCounter extends Component<{}, State> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//  IncrementCount = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.IncrementCount}>
//           Clicked {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }

// export default ClickCounter;
// //HOC compone
import React, { Component } from "react";
import withCounter from "./withCounter";

interface Props {
  count: number;
  incrementCount: () => void;
}

class ClickCounter extends Component<Props> {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 100); // pass initial count value as 0

