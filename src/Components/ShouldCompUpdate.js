import React from "react";

class ShouldCompUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate() {
        console.log("state update = ", this.state.count)
        return true
    }

    render() {
        return (
            <div>
                <h1>The count is = {this.state.count}</h1>
                <button onClick={()=>this.setState({count: this.state.count+1})} >Update Count</button>
            </div>
        )
    }

    componentWillUnmount() {
        alert("component has been removed")
        console.log(this.state.count<5)
        if (this.state.count <5) {
            this.mounted = false;
        } else {
            this.mounted = true;
        }
    }
}

export default ShouldCompUpdate