// import React,{ Component} from "react";
// // interface Props {
// //     name: string;
// //     // sirname:string;
// //   }
  
// interface State {
//     name: String;
//   }
// class Statelearn extends Component<State>{
//     constructor(State ){
//         super(State);
       
//         this.state={
//             name:"sachin"
//         }
//     }
//     changeMessage(){
//         this.setState({
//             name:"manish"
//         })
//     }
//     render() {
//         //  console.log(this.props);
//         console.log(this.state);
//             return (
//                 <div>
//                     <h1>{this.state.name}</h1>
//                     <button onClick={()=>this.changeMessage()}>Submit</button>
//                 </div>
//             );
            
//     }
// }
// export default Statelearn;
// import React, { Component, useState } from 'react';

// interface Props {
//   name: string;
// }

// interface State {
//   count: number;
// }

// class Statelearn extends Component<Props, State> {
//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.props.name}!</h1>
//         <Counter />
//       </div>
//     );
//   }
// }

// function Counter() {
//   const [count, setCount] = useState(5);
//   //setstate

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Statelearn;

import React, { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  count: number;
}

class Statelearn extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));//to render value
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Statelearn;
