import React from 'react'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
import { fetchCharacters } from '../actions/actions'
import CharacterList from '../components/CharacterList'
// import CharacterFormContainer from '../containers/CharacterFormContainer'

class CharactersContainer extends React.Component{
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount(){
        this.props.fetchCharacters()
    }

    render(){
        return(
            <div>
                <h1>Current Edgerunners</h1>
                <CharacterList characters={this.props.characters} />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}
export default connect(mapStateToProps, { fetchCharacters })(CharactersContainer)