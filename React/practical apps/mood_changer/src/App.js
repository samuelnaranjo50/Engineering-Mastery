import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useReducer} from 'react';

function App() {

  const initialMood = {
    mood:"Set my mood",
    emoji: "😐"
  }

  const moodReducer = (myMood, action) => {
    switch (action.type) {
      case "Be Happy":
        return{
          mood: "I'm Happy",
          emoji: "😊"
        }
      case "Be Sad":
        return {
          mood: "I'm sad",
          emoji: "😢"
        }
      case "Be Angry":
      
        return {
          mood: "I'm Angry",
          emoji: "😡"
        }
      case "Reset": 
          return {
            mood:"Set my mood",
            emoji: "😐"
          }
      default:
        return myMood

    }
  }

  const [myMood, moodDispatch] = useReducer(moodReducer, initialMood)


  return (
    <div>
      <h1>Current mood</h1>
      <p>{myMood.mood}</p>
      <p>{myMood.emoji}</p>
      <div className="UiButtons">
        <button onClick={() => moodDispatch({type: "Be Happy"})}>Be Happy</button>
        <button onClick={() => moodDispatch({type: "Be Sad"})}>Be Sad</button>
        <button onClick={() => moodDispatch({type: "Be Angry"})}>Be Angry</button>
         <button onClick={() => moodDispatch({type: "Reset"})}>Reset...</button>
      </div>
    </div>
     
  );
}

export default App;
