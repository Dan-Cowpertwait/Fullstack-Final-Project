import React from 'react';
import CharacterCard from './CharacterCard';


export default function CharacterList({ characters }) {
  const emptyMessage = <p>No characters created</p>;

  const charactersList = (
    <div className="ui four cards">
      <CharacterCard character={characters} />
    </div>
  );

  return (
    <div>
      {characters.length === 0 ? emptyMessage : charactersList}
    </div>
  );
}
