import React from 'react';
import styles from './App.module.css';

class App extends React.Component {
    render() {
        const list = ["Vestir roupa", "Lavar os dentes", "Ir às compras"];
        /*
            <ul>
                <li>Vestir roupa</li>
                <li>Lavar os dentes</li>
                <li>Ir às compras</li>
            </ul>
        */

        return (
            <div className={styles.container}>
                <h1>A minha lista de afazeres</h1>
                <ul>
                    {list.map((valor) => {
                        return <li>{valor}</li>
                    })}
                    <li><button onClick={
                        function() {
                            list.push("Apanhar o autocarro");
                        }
                    }>add</button></li>
                </ul>
            </div >
        );
    }
}

export default App;