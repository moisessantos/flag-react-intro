import React, { useEffect, useState } from 'react';
import Album from './Album';
import styles from './App.module.css';

const App = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((newData) => {
        setData(newData)
      });
  }, []); //[] => componentDidMount [data,users] => componentDidUpdate

  const getUserById = (id) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((newData) => {
        users.push(newData);
        setUsers(users);
      });
  }

  console.warn(users)
  return (
    <div className={styles.container}>
      <ul>
        {data.map((album, index) => (
          <Album
            key={album.id}
            album={album}
            data-testid={index}
            fetchUser={() => getUserById(album.userId)}
            authorName={users.find(author => author.id === album.userId)?.name}
          />)
        )}
      </ul>
    </div>
  );
}

export default App;
