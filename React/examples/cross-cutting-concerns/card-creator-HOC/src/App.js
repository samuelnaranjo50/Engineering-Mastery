import logo from './logo.svg';
import './App.css';
import React from 'react';

function addCard(BaseComponent){
    const EnhancedComponent = (props) => { 
        return (
        <div style={{
             backgroundColor: "blueviolet",
          padding: "30px",
          borderRadius: "10px",
          color: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          margin: "30px auto",
          maxWidth: "400px",
        }}>
            <BaseComponent {...props} />
        </div>
        )
    }

    return EnhancedComponent;
}



function text ({data}){

      const newText = data.map((item, index) => {
          const element = React.createElement(item.type, { key: index }, item.data)
          return element
      }
      )
      return newText
        
}

const NewCard = addCard(text);

const cardData1 = [{ type: "h1", data: "This is interesting"},{type: "p", data: "Wow"}]
const cardData2 = [{ type: "h1", data: "Other Card"},{ type: "h3", data: "This is interesting"},{type: "p", data: "Wow...."}]
const cardData3 = [{ type: "h1", data: "Mine liebe love"},{ type: "h3", data: "New data"},{type: "p", data: "Wow...."}, {type: "p", data: "More text...."}]

function App() { 

  
  return (
    <>
    <NewCard data={cardData1}/>
    <NewCard data={cardData2}/>
    <NewCard data={cardData3}/>
    
    </>
  
)

};





export default App;
