import React from 'react';
import CharacterCard from '../components/CharacterCard';

export default function CharacterList({ characters }) {
  const emptyMessage = <p>There are no characters yet in your collection.</p>;

  const characterList = (
    <div className="container">
      {characters.map(character => (
        <CharacterCard character={character} key={character.id}/>
      ))}
    </div>
  );

  return (
    <div>
      {characters.length === 0 ? emptyMessage : characterList}
    </div>
  );
}

