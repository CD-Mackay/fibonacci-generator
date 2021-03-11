import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Output from './Output';

export default function Input(props) {
  const [numone, setNumone] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [numThree, setNumThree] = useState(0);
  const [sequence, setSequence] = useState([]);
  function create () {
  const fib = props.onSubmit(numone, numTwo, numThree);
  setSequence([fib]);
  }

  return (
    <div className="input">
      <h3>Welcome to the Fibonacci Generator!</h3>
      <p>Please enter three numbers below, the first two will form the basis of the Fibonacci sequence.</p>
      <a id="fibonacci-link" href="https://en.wikipedia.org/wiki/Fibonacci_number">A fib-a what?</a>
    <form onSubmit={event => event.preventDefault()} id="input-form">
      <div className="seperator">
      <label for="numOne">Enter the first number</label>
      <input type="number" onChange={e => setNumone(e.target.value)} />
      </div>
      <div className="seperator">
      <label for="numTwo">Enter the second number</label>
      <input type="number" onChange={e => setNumTwo(e.target.value)} />
      </div>
      <div className="seperator">
        <label for="numentries">How entries should be run?</label>
        <input type="number" onChange={e => setNumThree(e.target.value)}></input>
      </div>
      <button onClick={create} >Submit!</button>
    </form>
    {sequence.length > 0 && <Output sequence={sequence} numOne={numone} numTwo={numTwo} numThree={numThree} />}
     </div>
  )
}