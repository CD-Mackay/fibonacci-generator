import React from 'react';
import './styles.scss';

export default function Output(props) {
  
  const renderSequence = props.sequence[0].map(n => {
    return <li key={n}>{n}</li>
  })
  return (
    <div id="output">
    <ul>
    { renderSequence }
    </ul>
    </div>
  )
}