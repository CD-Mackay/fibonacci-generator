import React from 'react';
import './styles.scss';

export default function Output(props) {
  function save () {
    props.save(sequence[0], sequence[1], sequence.length -2);
    props.clear();
  };

 
  function generateRandomNumber() {
    return Math.floor((Math.random() * 10000) + 1);
  }
  const sequence = [...props.sequence];
 
  const largestNum = sequence[sequence.length - 1];
  
  const renderSequence = sequence.map(n => {
    const visualizerLength = (n / largestNum * 100);

    return <li key={generateRandomNumber()}>{n}
             <div className="data-visual" 
                  style={{width: visualizerLength + "%"}} >
             </div>
           </li>
  })
  return (
    <div id="output">
      <h3>A Fibonacci sequence, beginning with {sequence[0]} and {sequence[1]}</h3> 
      <h4>{sequence.length - 2} iterations</h4>
    <ul>
    { renderSequence }
    </ul>
      <button onClick={save} >Save!</button>
    </div>
  )
}