import React from 'react';
import ListItem from './SequenceListItems';

export default function SequenceList(props) {

  const parsedSequences = props.sequences.map(seq => {
    return <ListItem id={seq.id} key={seq.id} numone={seq.num_one} numTwo={seq.num_two} />
  })
  return (
    <div>
      {parsedSequences}
    </div>
  )
}