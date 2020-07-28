import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../actions/actions'
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
                <h1>characters list</h1>
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