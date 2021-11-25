import React from 'react';
import styles from './App.module.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ["Vestir roupa", "Lavar os dentes", "Ir às compras", "Ir ao shopping"],
            value: ''
        };
        this.addTodo = this.addTodo.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    changeValue(e){
        this.setState({
            todos: this.state.todos,
            value: this.state.value + e.target.value
        })
    }

    deleteTodo(todo) {
        const newTodos = this.state.todos;
        newTodos.pop();
        this.setState({
            todos: newTodos,
        });
    }

    addTodo() {
        const newTodos = this.state.todos;
        newTodos.push(this.state.value);
        this.setState({
            todos: newTodos,
            value: ''
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>A minha lista de afazeres</h1>
                <ul>
                    {this.state.todos.map((valor) => {
                        return (
                            <li key={valor}>
                                <span>{valor}</span>
                                <button onClick={() => this.deleteTodo("")}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
                <input type="text" value={this.state.value} onChange={this.changeValue} />
                <button onClick={this.addTodo}>Add</button>
            </div >
        );
    }
}

export default App;