import React from 'react';
import ListItem from './SequenceListItems';

export default function SequenceList(props) {
  let parsedSequences = <div>nothing</div>
  if (props.sequences) {
     parsedSequences = props.sequences.map(seq => {
    return <ListItem id={seq.id} key={seq.id} numone={seq.num_one} numTwo={seq.num_two} onSelect={props.onView} />
  })};
  return (
    <div>
      {parsedSequences}
    </div>
  )
}