import React, { useState } from 'react';

export default function Input(props) {
  const [numone, setNumone] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [sequence, setSequence] = useState([]);
  function create () {
    props.onSubmit(1, 2)
  }
  return (
    <form>
      <input type="number" />
      <input type="number" />
      <button onClick={create} >Submit!</button>
    </form>
  )
}