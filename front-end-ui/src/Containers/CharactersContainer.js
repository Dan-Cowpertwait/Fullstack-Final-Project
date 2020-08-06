import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacters, deleteCharacter } from '../actions/actions'
import CharacterList from '../components/CharacterList'

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
                <CharacterList characters={this.props.characters} deleteCharacter={this.props.deleteCharacter} />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}
export default connect(mapStateToProps, { fetchCharacters, deleteCharacter })(CharactersContainer)