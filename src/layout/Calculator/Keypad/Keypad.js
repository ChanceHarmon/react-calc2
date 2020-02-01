/* eslint-disable no-undef */
import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';

//&larr; Dont forget this, handy syntax for a delete text
const keypad = (props) => (
  <section className="keypad">
    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>MC</Button>
      <Button onButtonPress={props.onButtonPress}>MR</Button>
      <Button onButtonPress={props.onButtonPress}>M+</Button>
      <Button onButtonPress={props.onButtonPress}>M-</Button>
    </KeypadRow>

    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>7</Button>
      <Button onButtonPress={props.onButtonPress}>8</Button>
      <Button onButtonPress={props.onButtonPress}>9</Button>
      <Button onButtonPress={props.onButtonPress}>/</Button>
    </KeypadRow>

    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>4</Button>
      <Button onButtonPress={props.onButtonPress}>5</Button>
      <Button onButtonPress={props.onButtonPress}>6</Button>
      <Button onButtonPress={props.onButtonPress}>*</Button>
    </KeypadRow>

    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>1</Button>
      <Button onButtonPress={props.onButtonPress}>2</Button>
      <Button onButtonPress={props.onButtonPress}>3</Button>
      <Button onButtonPress={props.onButtonPress}>+</Button>
    </KeypadRow>

    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>.</Button>
      <Button onButtonPress={props.onButtonPress}>0</Button>
      <Button onButtonPress={props.onButtonPress}>=</Button>
      <Button onButtonPress={props.onButtonPress}>-</Button>
    </KeypadRow>
    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}> Clear</Button>
    </KeypadRow>
    {/* Button type="large"  */}
  </section>
);
export default keypad;
