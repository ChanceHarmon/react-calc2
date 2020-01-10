import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from "./ComputationScreen/ComputationScreen";

const screen = () => (
  <section className="screen">
    <ComputationScreen />
    <ResultScreen />
  </section>
);

export default screen;