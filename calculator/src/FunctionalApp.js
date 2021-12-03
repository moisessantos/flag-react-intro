import React, { useState, useCallback } from 'react';

import Result from './components/Result';
import { KeyPad } from './components';
import { ClickContext } from './ClickContext';

const FunctionalApp = () => {
    const [result, setResult] = useState("");
    const reset = useCallback(() => {
        setResult("");
    }, [setResult]);

    const calculate = useCallback(() => {
        const newResult = result.includes('--') ? result.replace('--', '+') : result;
        try {
            setResult(eval(newResult) + "");
        } catch (e) {
            setResult("error")
        }
    }, [setResult, result]);

    const backspace = useCallback(() => {
        setResult(result.slice(0, -1));
    }, [setResult, result]);

    const onClick = useCallback(button => {
        if (button === "=") {
            calculate();
        } else if (button === "C") {
            reset();
        } else if (button === "CE") {
            backspace();
        } else {
            setResult(result + button);
        }
    }, [backspace, reset, calculate, result, setResult]);

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

export default FunctionalApp;