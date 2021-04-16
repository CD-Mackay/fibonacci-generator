import React, { useState } from 'react';

export default function Input(props) {
  const [numone, setNumone] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [numThree, setNumThree] = useState(0);
  function create () {
  props.onSubmit(numone, numTwo, numThree);
  }

  return (
    <div className="input">
      <h3>Welcome to the Fibonacci Generator!</h3>
      <div className="form-wrapper">
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
        <label for="numentries">How many entries should be run?</label>
        <input type="number" onChange={e => setNumThree(e.target.value)}></input>
      </div>
      <button onClick={create} >Submit!</button>
    </form>
    <div className="text-wrapper">
    <p>Please enter three numbers below, the first two will form the basis of the Fibonacci sequence.</p>
      <a id="fibonacci-link" href="https://en.wikipedia.org/wiki/Fibonacci_number">A fib-a what?</a>
    </div>
    </div>
     </div>
  )
}