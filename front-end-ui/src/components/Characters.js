import React, { Component } from 'react';
import CharacterList from './CharacterList.js';
import { connect } from 'react-redux';
import { fetchCharacters } from './actions/characters';
 
class Characters extends Component {
    componentDidMount(){
        this.props.fetchCharacters();
    }

    render() {
        return (
            <div>
                <h1>Characters</h1>

                <CharacterList characters={this.props.characters} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters // state.data.characters
    }
}

export default connect(mapStateToProps, { fetchCharacters })(Characters);
