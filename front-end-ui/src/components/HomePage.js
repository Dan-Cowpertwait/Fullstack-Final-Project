import React from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends React.Component{
    render(){
        return (
            <div>
                <h1>Home Header</h1>
                <p>Character info</p>
                <Link to={`/characters`}>All Characters</Link>
            </div>
        )
    }
}