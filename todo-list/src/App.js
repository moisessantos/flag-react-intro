import React from 'react';
import styles from './App.module.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ["Vestir roupa", "Lavar os dentes", "Ir às compras"]
        };
    }
    
    render() {
        return (
            <div className={styles.container}>
                <h1>A minha lista de afazeres</h1>
                <ul>
                    {this.state.todos.map((valor) => {
                        return <li>{valor}</li>
                    })}
                    <li>
                        <button onClick={}>Add</button>
                        <button onClick={}>Delete</button>
                    </li>
                </ul>
            </div >
        );
    }
}

export default App;