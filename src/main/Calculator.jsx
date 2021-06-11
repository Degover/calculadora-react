import React, { Component } from 'react'
import './Calculator.css'

import Button from './../components/Button'
import Display from './../components/Display'

class Calculator extends Component {
    clearMemory() {
        console.log('limpar');
    }

    setOperation(operation) {
        console.log(operation);
    }

    addDigit(digit) {
        console.log(digit);
    }

    render() {
        const addDigit = n => this.addDigit(n);
        const setOperation = n => this.setOperation(n);
        return (
            <div className="calculator">
                <Display value={0}/>
                <Button label="AC" triple click={() => this.clearMemory()}/>
                <Button label="/" operation click={setOperation}/>
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" operation click={setOperation}/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" operation click={setOperation}/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" operation click={setOperation}/>
                <Button label="0" double click={addDigit}/>
                <Button label="." operation click={setOperation}/>
                <Button label="=" operation click={setOperation}/>
            </div>
        );
    }
}

export default Calculator;

