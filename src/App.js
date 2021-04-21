import Input from './Input';
import Output from './Output';
import SequenceList from './Components/SequenceList';
import Placeholder from './Components/Placeholder';
import './styles.scss';

import useInputData from './hooks/useInputData';
import useStoredData from './hooks/useStoredData';
import './App.css';

function App() {


  const { generateFibonacci, shownSequence, removeShownSequence } = useInputData();
  const { saveSequence, deleteSequence, state } = useStoredData();

  
  return (
    <div className="App">
      <Input onSubmit={generateFibonacci} shown={shownSequence} />
      {shownSequence && <Output sequence={shownSequence} save={saveSequence} clear={removeShownSequence} />}
      {!shownSequence && <Placeholder />}
      <SequenceList sequences={state} onView={generateFibonacci} clear={removeShownSequence} delete={deleteSequence} sequence={shownSequence} />
    </div>
  );
}

export default App;
