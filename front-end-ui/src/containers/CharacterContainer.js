import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/CharacterActions';
import { Component } from 'react';
import CharacterList from '../components/CharacterList'


class CharacterContainer extends Component {
    componentDidMount(){
        this.props.fetchCharacters();
    }

    render() {
        return (
            <div>
                <h1>Rendered Characters</h1>
                <CharacterList characters={this.props.characters} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterContainer);