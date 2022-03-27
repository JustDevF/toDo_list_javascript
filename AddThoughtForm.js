import React, {useState} from 'react';

import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  //état initial de l'entrée de texte sous forme de chaîne vide.
  const [text, setText] = useState('');
  //FGE
  const handleTextChange = (event) => {
    //Mag de state hook
    setText(event.target.value);
  }

  //FGE
  const handleSubmit = (event) => {
    //Pour empêcher d'actualiser la page
    event.preventDefault();
    //créer un nouvel objet de pensée avec ses trois propriétés requise
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    }
    //Empécher si l’utilisateur n’a rien tapé mais qu’il soumet quand même le formulaire, une pensée vide soit créée
    if(text.length > 0){
      //passer l'objet dynamique crée à la foncton addThought en param
      props.addThought(thought);
    }
    
    //Effacez le champs de texte input après l'avoir ajouté à l'objet thought
    setText('');
  }

  return (
    <form  onSubmit={handleSubmit}className="AddThoughtForm">
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input  type="submit" value="Add" />
    </form>
  );
}
