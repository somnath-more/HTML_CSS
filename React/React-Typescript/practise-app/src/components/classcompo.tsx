import React,{ Component} from "react";
interface Props {
    name: string;
    sirname:string;
  }
class classcompo extends Component<Props>{
    render() {
         console.log(this.props);
            return <h1>Balram {this.props.name} and {this.props.sirname}</h1>;
    }
}
export default classcompo;