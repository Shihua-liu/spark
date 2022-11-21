import React from "react"

class collection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
        <h1>{this.props.hallo}</h1> 
        );
    }
}
 
export default collection;