import React from 'react';
import ListItem from './SequenceListItems';

export default function SequenceList(props) {
  let parsedSequences = <div>nothing</div>;

  if (props.sequences) {
     parsedSequences = props.sequences.map(seq => {
    return <ListItem id={seq.id} key={seq.id} onDelete={props.delete} onChange={props.clear} shown={props.sequence} numone={seq.num_one} numTwo={seq.num_two} numThree={seq.num_three} onSelect={props.onView} />
  })};
  return (
    <div>
      <h3>View other sequences!</h3>
      {parsedSequences}
    </div>
  )
}