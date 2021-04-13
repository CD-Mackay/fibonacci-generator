import React from 'react';

export default function ListItem(props) {
  let showSequence = <div></div>

  const view = () => {
    let sequence = props.onSelect(props.numone, props.numTwo, props.numThree);
   showSequence = sequence.map(seq => {return <li>{seq}</li>})
  };
  
  return (
    <div className="list-item">
   <button onClick={view}>{props.numone}, {props.numTwo}, {props.numThree}</button>
   <button>Delete</button>
   <ul>
   {showSequence}
   </ul>
   </div>
  )
}