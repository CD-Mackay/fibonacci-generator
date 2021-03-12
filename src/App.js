import Input from './Input';
import './styles.scss';

import useInputData from './hooks/useInputData';
import useStoredData from './hooks/useStoredData';
import './App.css';

function App() {


  const { generateFibonacci } = useInputData();
  const { saveSequence } = useStoredData();
  
  return (
    <div className="App">
      <Input onSubmit={generateFibonacci} onSave={saveSequence} />
    </div>
  );
}

export default App;
