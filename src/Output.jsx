import React from 'react';

export default function Output(props) {
  const renderSequence = props.sequence[0].map(n => {
    return <li>{n}</li>
  })
  return (
    <ul>
    { renderSequence }
    </ul>
  )
}