import React from 'react';

export default function Input(props) {
  
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