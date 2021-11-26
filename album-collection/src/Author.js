import React from "react";

class Author extends React.Component {
    // shouldComponentUpdate(nextProps) {
    //     return this.props.name !== nextProps.name;
    // }

    render() {
        if(this.props.name) {
            return <div className={this.props.className}>{this.props.name}</div>
        }
        return <button onClick={this.props.fetchUser}>?</button>
    }
}

export default Author;