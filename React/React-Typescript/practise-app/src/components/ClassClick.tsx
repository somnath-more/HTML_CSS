import React, { Component } from 'react'

export class ClassClick extends Component {
    clickhandler(){//This si smethos
         console.log("I am class btn clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>ClassClick!!</button>
      </div>
    )
  }
}

export default ClassClick