import React from 'react';
import './styles.scss';

export default function Output(props) {
  function save () {
    props.save(props.numOne, props.numTwo, props.numThree);
  };

 
  const sequence = [...props.sequence];
  console.log(sequence);
 
  const largestNum = sequence[sequence.length - 1];
  console.log(largestNum);
  
  // const renderSequence = props.sequence[0].map(n => {
  //   const visualizerLength = (n / largestNum * 100);
  //   return <li key={n}>{n}<div className="data-visual" style={{width: visualizerLength + "%"}} ></div></li>
  // })
  return (
    
    <div id="output">
      {/* <h3>A Fibonacci sequence, beginning with {props.numOne} and {props.numTwo}</h3> 
      <h4>{props.numThree} total entries</h4> */}
    <ul>
    {/* { renderSequence } */}
    </ul>
      <button onClick={save} >Save!</button>
    </div>
  )
}