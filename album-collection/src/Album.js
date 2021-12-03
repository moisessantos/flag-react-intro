import React from "react";
import Author from './Author';
import styles from './Album.module.css';

class Album extends React.Component {
    // shouldComponentUpdate(nextProps){
    //   if(nextProps.album.title !== this.props.album.title || this.props.authorName !== nextProps.authorName) {
    //     return true;
    //   }
    //   return false;
    // }

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
      );
    }
}

export default Album;