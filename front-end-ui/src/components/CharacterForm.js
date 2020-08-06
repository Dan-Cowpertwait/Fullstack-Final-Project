import React from 'react';

class CharacterForm extends React.Component {
        state = {
            role: this.props.character ? this.props.character.role : ' ',
            name: this.props.character ? this.props.character.name : ' ',
            background: this.props.character ? this.props.character.background : ' ',
            motivation: this.props.character ? this.props.character.motivation : ' ',
            goals: this.props.character ? this.props.character.goals : ' ',
            friends: this.props.character ? this.props.character.friends : ' ',
            enemies: this.props.character ? this.props.character.enemies : ' ',
            romance: this.props.character ? this.props.character.romance : ' ',
            personality: this.props.character ? this.props.character.personality : ' ',
            id: this.props.character ? this.props.character.id : null,
            fetching: false,
            errors: {}
        };

//set form values if character is already loaded for update.

  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // validation
    let errors = {};
    if (this.state.role === '') errors.role = "Input Required";
    if (this.state.name === '') errors.name = "Input Required";
    if (this.state.background === '') errors.background = "Input Required";
    if (this.state.motivation === '') errors.motivation = "Input Required";
    if (this.state.goals === '') errors.goals = "Input Required";
    if (this.state.friends === '') errors.friends = "Input Required";
    if (this.state.enemies === '') errors.enemies = "Input Required";
    if (this.state.romance === '') errors.romance = "Input Required";
    if (this.state.personality === '') errors.personality = "Input Required";

    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      const { role, name, background, motivation, goals, friends, enemies, romance, personality } = this.state;
      const id = this.state.id;
      console.log(id)
      this.setState({ fetching: true });
      this.props.saveCharacter({ id, role, name, background, motivation, goals, friends, enemies, romance, personality})
    }
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.character !== null){
      const { id, role, name, background, motivation, goals, friends, enemies, romance, personality } = nextProps.character;
      if (nextProps.character.id !== state.id) {
        return {
          id,
          role,
          name,
          background,
          motivation,
          goals,
          friends,
          enemies,
          romance,
          personality
        };
      }
      // Return null to indicate no change to state.
      return null;
    }
  }

  render() {
    const form = (
      <form className='form'onSubmit={this.handleSubmit}>

        <h1>New character</h1>

        <div
          className='field'>
          <label htmlFor="role">Role</label>
          <input name="role" value={this.state.role} onChange={this.handleChange} type="text" id="role"/>
          
        </div>

        <div className='field'>
          
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            id="name"
          />
          
        </div>

        <div className='field'>
          
          <label htmlFor="background">Background</label>
          <input
            name="background"
            value={this.state.background}
            onChange={this.handleChange}
            type="text"
            id="background"
          />
          
        </div>

        <div className='field' >
          
          <label htmlFor="motivation">Motivation</label>
          <input
            name="motivation"
            value={this.state.motivation}
            onChange={this.handleChange}
            type="text"
            id="motivation"
          />
          
        </div>

        <div className='field' >
          
          <label htmlFor="goals">Goals</label>
          <input
            name="goals"
            value={this.state.goals}
            onChange={this.handleChange}
            type="text"
            id="goals"
          />
          
        </div>

        <div className='field' >
          
          <label htmlFor="friends">Friends</label>
          <input
            name="friends"
            value={this.state.friends}
            onChange={this.handleChange}
            type="text"
            id="friends"
          />
          
        </div>

        <div className='field'>
          
          <label htmlFor="enemies">Enemies</label>
          <input
            name="enemies"
            value={this.state.enemies}
            onChange={this.handleChange}
            type="text"
            id="enemies"
          />
        </div>

        <div className='field'>
          
          <label htmlFor="romance">Romance</label>
          <input
            name="romance"
            value={this.state.romance}
            onChange={this.handleChange}
            type="text"
            id="romance"
          />
        </div>

        <div className="field">
          
          <label htmlFor="personality">Personality</label>
          <input
            name="personality"
            value={this.state.personality}
            onChange={this.handleChange}
            type="text"
            id="personality"
          />
          <span>{this.state.errors.personality}</span>
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    );
    return (
      <div>
        {form}
      </div>
    );
  }
}


export default CharacterForm
