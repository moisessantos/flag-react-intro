import React, { useState } from 'react';
import Todo from './Todo';
import styles from './App.module.css';

const FunctionalApp = () => {
    const [todos, setTodos] = useState(["Vestir roupa", "Lavar os dentes", "Ir às compras", "Ir ao shopping"]); //todos
    const [value, setValue] = useState(''); //value

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const deleteTodo = (todoToDelete) => {
        setTodos(todos.filter((todo) => todo !== todoToDelete));
    }

    const addTodo = () => {
        const newTodos = todos;
        newTodos.push(value);
        setTodos(newTodos);
        setValue('');
    }

    return (
        <div className={styles.container}>
            <h1>A minha lista de afazeres</h1>
            <Todo>Estudar React</Todo>
            <ul>
                {todos.map((valor) => <Todo key={valor} onDelete={() => deleteTodo(valor)}>{valor}</Todo>)}
            </ul>
            <input type="text" value={value} onChange={changeValue} />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default FunctionalApp;