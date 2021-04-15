import Input from './Input';
import Output from './Output';
import SequenceList from './Components/SequenceList';
import './styles.scss';

import useInputData from './hooks/useInputData';
import useStoredData from './hooks/useStoredData';
import './App.css';

function App() {


  const { generateFibonacci, shownSequence } = useInputData();
  const { saveSequence, deleteSequence, state } = useStoredData();

  
  return (
    <div className="App">
      <Input onSubmit={generateFibonacci} shown={shownSequence} />
      {shownSequence && <Output sequence={shownSequence} save={saveSequence} />}
      <SequenceList sequences={state} onView={generateFibonacci} delete={deleteSequence} sequence={shownSequence} />
    </div>
  );
}

export default App;
