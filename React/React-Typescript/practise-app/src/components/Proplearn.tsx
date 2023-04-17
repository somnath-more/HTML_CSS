import React from "react";
// function Greet(){
//     return <h1>Hello Krushna</h1>
// }
// export default Greet;
interface Props {
    name: string;
    sirname:string;
  }
const Proplearn :React.FC<Props>  =({ name,sirname })=>{
return (

 <h1>Hare Krishna {name} and hare rama {sirname}</h1>
    // console.log(sirname);

);
}
export default Proplearn;
//const {name,sirname}=props//In functional compnanet
//const {name,sirname}=this.props//In functional compnanet

//
