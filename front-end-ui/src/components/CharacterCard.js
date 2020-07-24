import React from 'react';

export default function CharacterCard({ character }) {
    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.role}</p>
            <p>{character.background}</p>
            <p>{character.motivation}</p>
            <p>{character.goals}</p>
            <p>{character.friends}</p>
            <p>{character.enemies}</p>
            <p>{character.romance}</p>
            <p>{character.personality}</p>

        </div>
    )
}