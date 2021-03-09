import React, { useState } from 'react';

export default function Input(props) {
  const [numone, setNumone] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [sequence, setSequence] = useState([]);
  function create () {
  const fib = props.onSubmit(numone, numTwo);
  setSequence([fib]);
  }

  return (
    <form onSubmit={event => event.preventDefault()} >
      <input type="number" onChange={e => setNumone(e.target.value)} />
      <input type="number" onChange={e => setNumTwo(e.target.value)} />
      <button onClick={create} >Submit!</button>
    </form>
  )
}