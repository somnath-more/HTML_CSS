import React, { Component } from 'react'
import ChildComponenet from './ChildComponenet'

class ParentComponent extends Component<{}, {ParentName: string}> {
     constructor(props: any) {
       super(props)
     
       this.state = {
          
        ParentName: 'Parent'
       }
       this.greetParent=this.greetParent.bind(this);
     }
    greetParent(childName: any){
        alert(`Hello ${this.state.ParentName} from ${childName}`)
     }
    render() {
    return (
      <div>
        <ChildComponenet greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent