import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Output from './Output';

export default function Input(props) {
  const [numone, setNumone] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [sequence, setSequence] = useState([]);
  function create () {
  const fib = props.onSubmit(numone, numTwo);
  setSequence([fib]);
  }

  const renderSequence = sequence.map((n) => {
    return <Output number={n} />
  })

  return (
    <div>
    <form onSubmit={event => event.preventDefault()} >
      <input type="number" onChange={e => setNumone(e.target.value)} />
      <input type="number" onChange={e => setNumTwo(e.target.value)} />
      <button onClick={create} >Submit!</button>
    </form>
    <ul>
      { renderSequence }
    </ul>
     </div>
  )
}