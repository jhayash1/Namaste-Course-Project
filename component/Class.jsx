import React from "react";

class Class extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.name + ' Constructor');
    }
    async componentDidMount(){
        console.log(this.props.name + ' component');
    }
    render(){
        console.log(this.props.name + ' render');
        return(
            <>{this.props.name}</>
        )
    }
}
export default Class