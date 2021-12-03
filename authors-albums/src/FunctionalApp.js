import React, { useEffect, useState } from "react";
import UserList from "./users-list";
import AlbumList from "./albums-list";

const App = () => {
  const [users, setUsers] = useState([]);
  const [albumsByUserId, setAlbumsByUserId] = useState({});
  const [currentUserId, setCurrentUserId] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setUsers(users);
      })
  }, []);

  const getAlbumsByUserId = (userId) => {
    if (albumsByUserId[userId]) {
      setCurrentUserId(userId);
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/albums?userId=" + userId)
      .then(response => response.json())
      .then(albums => {
        albumsByUserId[userId] = albums;
        setAlbumsByUserId(albumsByUserId);
        setCurrentUserId(userId);
      })
  }

  return (
    <div className="App">
      <UserList users={users} handleClick={getAlbumsByUserId} />
      <br />
      {
        currentUserId &&
        <AlbumList albums={albumsByUserId[currentUserId]} />}
    </div>
  );
}

export default App;
