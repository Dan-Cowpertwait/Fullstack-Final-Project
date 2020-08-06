import React from 'react';
import CharacterCard from '../components/CharacterCard';

export default function CharacterList({ characters, deleteCharacter }) {
  const emptyMessage = <p>There are no characters yet in your collection.</p>;

  const characterList = (
    <div className="container">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} deleteCharacter={deleteCharacter}/>
      ))}
    </div>
  );

  return (
    <div>
      {characters.length === 0 ? emptyMessage : characterList}
    </div>
  );
}

