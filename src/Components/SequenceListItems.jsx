import React, { useState } from 'react';
import './liststyles.scss';

export default function ListItem(props) {
const [deleted, setDeleted] = useState(false);
  const view = () => {
    props.onChange();
    props.onSelect(props.numone, props.numTwo, props.numThree);
  }

  const removeSeq = () => {
    console.log('deleteing', props.id);
    props.onDelete(props.id);
    setDeleted(true);
  }
  
  return (
    <div className={deleted ? "deleted-item" : "list-item"}>
   <button onClick={view}>{props.numone}, {props.numTwo}, {props.numThree}</button>
   <button className="delete" onClick={removeSeq}>Delete</button>
   </div>
  )
}