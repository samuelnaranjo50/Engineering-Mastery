import logo from './logo.svg';
import './App.css';

import { DynamicListLoader } from './components/DynamicListLoader';

function App() {
  return (
    <div className="App">
      < DynamicListLoader element1="Rockets" element2="Cars" element3="Flying cars"/>
    </div>
  );
}

export default App;
