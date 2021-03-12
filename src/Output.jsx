import React from 'react';
import './styles.scss';

export default function Output(props) {
  function save () {
    props.save(props.numOne, props.numTwo, props.numThree);
  };
  
  const renderSequence = props.sequence[0].map(n => {
    return <li key={n}>{n}</li>
  })
  return (
    
    <div id="output">
      <h3>A Fibonacci sequence, beginning with {props.numOne} and {props.numTwo}</h3> 
      <h4>{props.numThree} total entries</h4>
    <ul>
    { renderSequence }
    </ul>
      <button onClick={save} >Save!</button>
    </div>
  )
}