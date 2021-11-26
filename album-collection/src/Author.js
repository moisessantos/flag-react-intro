import React from "react";

const Author = ({ name, className, fetchUser}) => (
        name ? <div className={className}>{name}</div> : 
        <button onClick={fetchUser}>?</button>
);

export default Author;