import React from "react";
import styles from "./users-list.module.css";

class UserList extends React.Component {
    render() {
        return(
            <ul className={styles.ul}>
                {this.props.users.map(user => <li key={user.id} className={styles.li} onClick={() =>this.props.handleClick(user.id)}>{user.name}</li>)}
            </ul>
        )
    }
}

export default UserList;