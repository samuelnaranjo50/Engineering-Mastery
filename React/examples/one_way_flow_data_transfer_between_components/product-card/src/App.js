import logo from './logo.svg';
import './App.css';

//My Main components
import { ProductData } from './components/ProductData';
import BuyProductButton from './components/BuyProductButton';

function App() {
  return (
    <div className="App">
      <ProductData /> 
      <BuyProductButton /> 
    </div>
  );
}

export default App;
