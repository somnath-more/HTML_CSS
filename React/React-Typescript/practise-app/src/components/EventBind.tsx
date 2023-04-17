import React, { Component } from 'react'
// interface State {
//     message:string;
//   }
export class EventBind
 extends Component<{}, {message: string}> {
    constructor(props:any) {
      super(props)
    
      this.state = {
         message:'I am !!',
      }
      this.clickHandler=this.clickHandler.bind(this);
    }    
    clickHandler=()=>{
        this.setState({
            message:'Okkkkkkkkkkkkk'
        })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Click!!</button> */}
          {/* <button onClick={()=>this.clickHandler()}>Click!!</button> */}
          <button onClick={this.clickHandler}>Click!!</button>
      </div>
    )
  }
}

export default EventBind

