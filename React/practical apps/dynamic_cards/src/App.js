import logo from './logo.svg';
import './App.css';

// My own components

import Card from './components/Card.js'

function App() {
  return (
    <div className="App">
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="Hallo,com" h3="First card's h3"/>
      <Card h2="First card's h2" h3="First card's h3"/>
    </div>
  );
}

export default App;
