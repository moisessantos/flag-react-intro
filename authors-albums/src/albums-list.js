import React from "react";
import styles from "./albums-list.module.css";

class AlbumsList extends React.Component {
    render() {
        return(
            <ul className={styles.ul}>
                {this.props.albums.map(albums => <li key={albums.id} className={styles.li}>{albums.title}</li>)}
            </ul>
        )
    }
}

export default AlbumsList;