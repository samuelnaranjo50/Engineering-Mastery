import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js'


function RandNum (){
  let random_number = Math.trunc(Math.random() * 100);
  return random_number;
}
function App() {

  return (
    <div className="App">
      <Card randomN={RandNum()} />
      <Card randomN={RandNum()} />
      <Card randomN={RandNum()} />
    </div>
  );
}

export default App;
