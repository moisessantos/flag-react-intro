import React from "react";

class Todo extends React.Component {
    render() {
        const { children, onDelete, ...otherProps } = this.props;  
        return (
            <li {...otherProps}>
                <span>{children}</span>
                {/* <button onClick={onDelete} disabled={!onDelete}>Delete</button> */}
                {onDelete && <button onClick={onDelete}>Delete</button>}
            </li>
        )
    }
}

export default Todo;
