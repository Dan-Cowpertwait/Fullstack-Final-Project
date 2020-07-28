import React from 'react';
// import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  return (
    <div className="card">
    <div>
        {character.name}
    </div>
        <p>{character.role}</p>
        <p>{character.background}</p>
        <p>{character.motivation}</p>
        <p>{character.goals}</p>
        <p>{character.friends}</p>
        <p>{character.enemies}</p>
        <p>{character.romance}</p>
        <p>{character.personality}</p>

        <br></br>
    </div>

  );
}

