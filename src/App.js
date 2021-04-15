import Input from './Input';
import SequenceList from './Components/SequenceList';
import './styles.scss';

import useInputData from './hooks/useInputData';
import useStoredData from './hooks/useStoredData';
import './App.css';

function App() {


  const { generateFibonacci, shownSequence, selectSequence } = useInputData();
  const { saveSequence, state } = useStoredData();

  
  return (
    <div className="App">
      <Input onSubmit={generateFibonacci} onSave={saveSequence} shown={shownSequence} />
      <SequenceList sequences={state} onView={generateFibonacci} />
    </div>
  );
}

export default App;
