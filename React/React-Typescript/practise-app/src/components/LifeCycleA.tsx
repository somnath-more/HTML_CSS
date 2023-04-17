import React, { Component } from 'react'
interface props{
    name:string;
}
export class LifeCycleA extends Component<props> {
    constructor(props: props ) {
      super(props)
    
      this.state = {
         name:'vishwas',
        
      }
      console.log("constructor called");
    }
    static getDerivedStateFromsProps(props: any,state: any){
        console.log("This method getDerivedStateFromsProps");
        return null;
    }
    componentDidMount(): void {
        console.log("This ComponentDidMount");
    }
  render() {
    console.log('render method')
    return (
       
      <div>LifeCycleA</div>
    )
  }
}

//Componentdidupdate important
//FrgamentDemo.tsx
//Pure components
//React memo

export default LifeCycleA