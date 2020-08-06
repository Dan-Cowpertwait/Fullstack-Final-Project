import React from 'react'
import CharacterForm from '../components/CharacterForm'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveCharacter, fetchCharacter, updateCharacter } from '../actions/actions';

class CharacterFormContainer extends React.Component{
    state = {
        redirect: false
      };

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.fetchCharacter(this.props.match.params.id);
    }
  };

  saveCharacter = ({ id, role, name, background, motivation, goals, friends, enemies, romance, personality}) => {
    if (id !== null) {
      const characterData = {character : { role, name, background, motivation, goals, friends, enemies, romance, personality}}
      const characterId = this.props.character.id
      return this.props.updateCharacter(characterId, characterData).then(() => {
        this.setState({ redirect: true });
      });
    } else {
      return this.props.saveCharacter({ role, name, background, motivation, goals, friends, enemies, romance, personality }).then(() => {
        this.setState({ redirect: true });
        console.log("Not Working")
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.redirect
          ? <Redirect to="/characters" />
          : <CharacterForm character={this.props.character} saveCharacter={this.saveCharacter} />}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  if (props.match.params.id) {
    return {
      character: state.characters[state.characters.length -1],
    }
  }else{
  }

  return { character: null };
}

export default connect(mapStateToProps, { saveCharacter, fetchCharacter, updateCharacter })(
    CharacterFormContainer
);