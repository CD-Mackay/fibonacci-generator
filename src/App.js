import Input from './Input';
import './styles.scss';

import useInputData from './hooks/useInputData';
import './App.css';

function App() {


  const { generateFibonacci } = useInputData();
  
  return (
    <div className="App">
      <Input onSubmit={generateFibonacci} />
    </div>
  );
}

export default App;
