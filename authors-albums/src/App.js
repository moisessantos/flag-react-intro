import React from "react";
import UserList from "./users-list";
import AlbumList from "./albums-list";

class App extends React {
  constructor(){
    super();
    this.state = {
      users: [],
      albumsByUserId: {},
      currentUserId: undefined,
      //albums: []
    }
    this.getAlbumsByUserId = this.getAlbumsByUserId.bind(this);
  }

  /*albumsByUserId: {
    1: [ lista de albums],
    2: [ lista de albums]
  }*/

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ users });
      })
  }

  getAlbumsByUserId(userId) {
    if(this.state.albumsByUserId[userId]){
      this.setState({
        currentUserId: userId
      })
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/albums?userId=" + userId)
      .then(response => response.json())
      .then(albums => {
        const albumsByUserId = this.state.albumsByUserId;
        albumsByUserId[userId] = albums;
        this.setState({ albumsByUserId, currentUserId: userId });
      })
  }
  
  render() {
    return (
      <div className="App">
        <UserList users={this.state.users} handleClick={this.getAlbumsByUserId} />
        <br />
        {
          this.state.currentUserId && 
            <AlbumList albums={this.state.albumsByUserId[this.state.currentUserId]} />}
      </div>
    );
  }
}

export default App;
