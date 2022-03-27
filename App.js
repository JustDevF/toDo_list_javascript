import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

//Composant de fonction
function App() {
  //State Hook 
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);
  //FGE prend l'objet thought en param
  //Ajouter un objet thougth 
  const addThought = (thought) => {
    //Mag de state hook
    setThoughts((prev) => [thought, ...prev]);
  };

  //1. Suppression manuelle d'objet thought
  //FGE prend l'id de l'objet thought
  const removeThought = (thoughtIdToRemove) => {
    //Mag de state hook
    //filtrer l'objet thought que nous voulons supprimer 
    setThoughts(prev => prev.filter(tought => (tought.id !== thoughtIdToRemove)))
  }
  //2. Suppression automatiquement les objets thought après une duréé donnée 
  //FGE prend l'id de l'objet thought




  //passez la fonction setThoughts  comme accessoire au composant <Thought>
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
