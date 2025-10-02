
import './App.css';
import { BuildingBox } from './components/BuildingBox.js';
import { Page } from './components/Page.js';
import { createContext, useState } from 'react';

export const MyContext = createContext(null) 

function App() {

  const [formData, setFormData] = useState({ title: "", text: "" })

  return (

      <div className="box_holder">
      <MyContext.Provider value={{formData, setFormData}}>
        <BuildingBox />
        <Page />
      </MyContext.Provider>
    </div>

      
   
  );
}

export default App;
