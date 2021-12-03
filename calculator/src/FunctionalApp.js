import React, { Component, useState } from 'react';

import Result from './components/Result';
import { KeyPad } from './components';
import { ClickContext } from './ClickContext';

const FunctionalApp = () => {
    const [result, setResult] = useState("");
    const onClick = button => {
        if (button === "=") {
            calculate();
        } else if (button === "C") {
            reset();
        } else if (button === "CE") {
            backspace();
        } else {
            setResult(result + button);
        }
    };

    reset = () => {
        setResult("");
    };

    calculate = () => {
        const newResult = result.includes('--') ? result.replace('--', '+') : result;
        try {
            setResult(eval(newResult) + "");
        } catch (e) {
            setResult("error")
        }
    };

    backspace = () => {
        setResult(result.slice(0, -1));
    };

    return (
        <div>
            <div className="calculator-body">
                <h1>Simple Calculator</h1>
                <Result>{result}</Result>
                <ClickContext.Provider value={onClick}>
                    <KeyPad />
                </ClickContext.Provider>
            </div>
        </div>
    );
}

export default App;