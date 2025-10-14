
import './App.css';
import { BuildingBox } from './components/BuildingBox.js';
import { Page } from './components/Page.js';
import {MyFormContext } from './context/formContext.js';

function App() {


  return (
      <div className="box_holder">
      <MyFormContext>
         <BuildingBox />
          <Page />
      </MyFormContext>
    </div>
  );
}

export default App;
