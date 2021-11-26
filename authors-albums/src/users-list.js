import React from "react";
import styles from "./users-list.module.css";

const UserList = ({ users, handleClick }) => (
    <ul className={styles.ul}>
        {users.map(({ name, id }) => <li key={id} className={styles.li} onClick={() => handleClick(id)}>{name}</li>)}
    </ul>
)

export default UserList;