import Input from './Input';
import Output from './Output';
import SequenceList from './Components/SequenceList';
import './styles.scss';

import useInputData from './hooks/useInputData';
import useStoredData from './hooks/useStoredData';
import './App.css';

function App() {


  const { generateFibonacci, shownSequence } = useInputData();
  const { saveSequence, state } = useStoredData();

  
  return (
    <div className="App">
      <Input onSubmit={generateFibonacci} onSave={saveSequence} shown={shownSequence} />
      {shownSequence && <Output sequence={shownSequence} save={saveSequence} />}
      <SequenceList sequences={state} onView={generateFibonacci} sequence={shownSequence} />
    </div>
  );
}

export default App;
