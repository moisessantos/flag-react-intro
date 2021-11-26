import React from "react";

const Todo = ({ children, onDelete, ...otherProps }) => (
    <li {...otherProps}>
        <span>{children}</span>
        {/* <button onClick={onDelete} disabled={!onDelete}>Delete</button> */}
        {onDelete && <button onClick={onDelete}>Delete</button>}
    </li>
)

export default Todo;
