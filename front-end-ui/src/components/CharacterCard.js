import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  return (
    <div className="card">
    <div>
        {character.name}
    </div>
        <p>ROLE - {character.role}</p>
        <p>BACKGROUND - {character.background}</p>
        <p>MOTIVATION - {character.motivation}</p>
        <p>GOALS - {character.goals}</p>
        <p>FRIENDS - {character.friends}</p>
        <p>ENEMIES - {character.enemies}</p>
        <p>ROMANCE - {character.romance}</p>
        <p>PERSONALITY - {character.personality}</p>

        <br></br>

        <Link to={`/character/${character.id}`} className="ui basic button green">Edit Character</Link>
    </div>

  );
}

