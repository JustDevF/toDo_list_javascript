import React, {useEffect} from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };
  //Lorsqu'un composant <Thought> est rendu, nous voulons lancer un compte à rebours. Une fois le compte à rebours expiré, nous voulons appeler removeThought () et supprime les objets toughts
  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout  = setTimeout(() => {
       removeThought(thought.id);
     }, timeRemaining);
     return () => {
       clearTimeout(timeout);
     };
    //réexécuter l'effet à chaque fois que la pensée est différente
  }, [thought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
