import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard({ character, deleteCharacter }) {
  return (
    <div className="card">
        <h2>{character.name}</h2>
    <img src={process.env.PUBLIC_URL + `/${character.role}.png`} alt="logo" />
        <h4 className="card-subtitle">Role</h4>
        <p>{character.role}</p>
        <h4 className="card-subtitle">Background</h4>
        <p>{character.background}</p>
        <h4 className="card-subtitle">Motivation</h4>
        <p>{character.motivation}</p>
        <h4 className="card-subtitle">Goals</h4>
        <p>{character.goals}</p>
        <h4 className="card-subtitle">Friends</h4>
        <p>F{character.friends}</p>
        <h4 className="card-subtitle">Enemies</h4>
        <p>{character.enemies}</p>
        <h4 className="card-subtitle">Romance</h4>
        <p>{character.romance}</p>
        <h4 className="card-subtitle">Personality</h4>
        <p>{character.personality}</p>

        <p>_________________________________________________________________________________________________________________________________</p>

        <br/>
        <br/>
        <br/>

        

        <Link to={`/character/${character.id}`} className="ui basic button green">Edit Character</Link>
        <button className="ui basic button green" onClick={() => deleteCharacter(character.id)}>DELETE</button>
    </div>

  );
}

