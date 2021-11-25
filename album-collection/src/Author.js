import React from "react";

class Author extends React.Component {
    render() {
        if(this.props.name) {
            return <div>{this.props.name}</div>
        }
        return <button onClick={this.props.fetchUser}>?</button>
    }
}

export default Author;