import React from 'react';
import Todo from './Todo';
import styles from './App.module.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ["Vestir roupa", "Lavar os dentes", "Ir às compras", "Ir ao shopping"],
            value: ''
        };
    }

    changeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    deleteTodo = (todoToDelete) => {
        const newTodos = this.state.todos;
        this.setState({
            todos: newTodos.filter((todo) => todo !== todoToDelete),
        });
    }

    addTodo = () => {
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
                <Todo>Estudar React</Todo>
                <ul>
                    {this.state.todos.map((valor) => <Todo key={valor} onDelete={() => this.deleteTodo(valor)}>{valor}</Todo>)}
                </ul>
                <input type="text" value={this.state.value} onChange={this.changeValue} />
                <button onClick={this.addTodo}>Add</button>
            </div>
        );
    }
}

export default App;