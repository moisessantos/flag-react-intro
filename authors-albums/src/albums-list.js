import React from "react";
import styles from "./albums-list.module.css";

const AlbumsList = ({ albums }) => (
    <ul className={styles.ul}>
        {albums.map(albums => <li key={albums.id} className={styles.li}>{albums.title}</li>)}
    </ul>
)

export default AlbumsList;