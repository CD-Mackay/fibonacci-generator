import logo from './logo.svg';
import Input from './Input';

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
