import React from 'react';
import { evaluate } from 'mathjs';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
  state = {
    equation: '',
    result: 0
  }
  onButtonPress = event => {
    let equation = this.state.equation;
    const pressedButton = event.target.innerHTML;

    //first checking if button press is clear
    if (pressedButton === 'Clear') //return this.clear();
      this.setState({ equation: '', result: 0 });
    //first check is to see if it a number
    //second check is decimal key, add it to the string of equation
    else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.')
      equation += pressedButton;
    //setting an array that has operators as values, seeing if the pressed button in an index of that array is not false, then setting the equationto put a space between the numbers and the operators
    else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' ';
    else if (pressedButton === '=') {
      try {
        const evalResult = evaluate(equation);
        const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert('Not a valid Math Equation');
      }
    }
    else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }
    this.setState({ equation: equation });
  }
  clear() {
    this.setState({ equation: '', result: 0 });
  }

  render() {
    return (
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <Keypad onButtonPress={this.onButtonPress} />
      </main>
    );
  }
}


export default Calculator;