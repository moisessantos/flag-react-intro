import React from "react";
import Author from './Author';
import styles from './Album.module.css';

class Album extends React.Component {
    render() {
        const { album, authorName, fetchUser, ...otherProps } = this.props;
        return (
            <li {...otherProps} className={styles.row}>
              <span>{album.title}</span>
              <Author
                name={authorName}
                fetchUser={fetchUser}
              />
            </li>
        )
    }
}

export default Album;