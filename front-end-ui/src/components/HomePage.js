import React from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends React.Component{
    render(){
        return (
            <div className="ui three item menu">
            <Link className="item" to="/">Home</Link>
            <Link className="item" to="/characters">Characters</Link>
            <Link className="item" to="/characters/new">Add new Character</Link>
          </div>
        )
    }
}