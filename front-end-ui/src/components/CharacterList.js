import React from 'react';
import {CharacterCard} from './CharacterCard';


export default function CharacterList({ character }) {
  const emptyMessage = <p>No characters created</p>;

  const CharacterList = (
    <div className="ui four cards">
      <h1>Characters will render here</h1>
    </div>
  );

  return (
    <div>
      {characters.length === 0 ? emptyMessage : charactersList}
    </div>
  );
}
