import React, { Component } from 'react';
import Album from './Album';
import styles from './App.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      users: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data
        })
      });
  }

  getUserById(id) {
    const newUsers = this.state.users;
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        newUsers.push(data)
        this.setState({
          users: newUsers
        })
      });
  }

  render() {
    return (
      <div className={styles.container}>
        <ul>
          {this.state.data.map((album) => (
            <Album
              key={album.id}
              album={album}
              fetchUser={() => this.getUserById(album.userId)}
              authorName={this.state.users.find(author => author.id === album.userId)?.name}
            />)
          )}
        </ul>
      </div>
    );
  }
}

export default App;
