import React from 'react';
import styles from './App.module.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ["Vestir roupa", "Lavar os dentes", "Ir às compras"],
            value: ''
        };
        this.addTodo = this.addTodo.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    changeValue(e){
        this.setState({
            todos: this.state.todos,
            value: this.state.value + e.key
        })
    }

    deleteTodo() {
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
                        return <li>{valor}</li>
                    })}
                </ul>
                <input type="text" value={this.state.value} onKeyDown={this.changeValue} />
                <button onClick={this.addTodo}>Add</button>
                <button onClick={this.deleteTodo}>Delete</button>
            </div >
        );
    }
}

export default App;