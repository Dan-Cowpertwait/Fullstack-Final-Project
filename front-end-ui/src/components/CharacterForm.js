import React from 'react';
import { connect } from 'react-redux'
import { saveCharacter } from '../actions/actions'
import classnames from 'classnames';

class CharacterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            role: this.props.character ? this.props.character.role : '',
            name: this.props.character ? this.props.character.name : '',
            background: this.props.character ? this.props.character.background : '',
            motivation: this.props.character ? this.props.character.motivation : '',
            goals: this.props.character ? this.props.character.goals : '',
            friends: this.props.character ? this.props.character.friends : '',
            enemies: this.props.character ? this.props.character.enemies : '',
            romance: this.props.character ? this.props.character.romance : '',
            personality: this.props.character ? this.props.character.personality : '',
            fetching: false,
            errors: {}
        };
    }
//set form values if character is already loaded for update.


  componentWillReceiveProps = nextProps => {
    this.setState({
      id: nextProps.character.id,
      role: nextProps.character.role,
      name: nextProps.character.name,
      background: nextProps.character.background,
      motivation: nextProps.character.motivation,
      goals: nextProps.character.goals,
      friends: nextProps.character.friends,
      enemies: nextProps.character.enemies,
      romance: nextProps.character.romance,
      personality: nextProps.character.personality
    });
  };

  handleChange = e => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value, errors });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    // validation
    let errors = {};
    if (this.state.role === '') errors.role = "Can't be empty";
    if (this.state.name === '') errors.name = "Can't be empty";
    if (this.state.background === '') errors.background = "Can't be empty";
    if (this.state.motivation === '') errors.motivation = "Can't be empty";
    if (this.state.goals === '') errors.goals = "Can't be empty";
    if (this.state.friends === '') errors.friends = "Can't be empty";
    if (this.state.enemies === '') errors.enemies = "Can't be empty";
    if (this.state.romance === '') errors.romance = "Can't be empty";
    if (this.state.personality === '') errors.personality = "Can't be empty";

    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      const { role, name, background, motivation, goals, friends, enemies, romance, personality } = this.state;
      this.setState({ fetching: true });
      this.props.saveCharacter({ role, name, background, motivation, goals, friends, enemies, romance, personality})
        .catch(err =>
          err
            .response.json()
            .then(({ errors }) => this.setState({ errors, fetching: false })));
    }
  };

  render() {
    const form = (
      <form
        className={classnames('ui', 'form', { fetching: this.state.fetching })}
        onSubmit={this.handleSubmit}
      >
        <h1>New character</h1>

        {!!this.state.errors.global &&
          <div className="ui negative message">
            <p>{this.state.errors.global}</p>
          </div>}

        <div
          className={classnames('field', { error: !!this.state.errors.role })}
        >
          <label htmlFor="role">Role</label>
          <input
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
            type="text"
            id="role"
          />
          <span>{this.state.errors.role}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.name })} >
          
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            id="name"
          />
          <span>{this.state.errors.name}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.background })} >
          
          <label htmlFor="background">Background</label>
          <input
            name="background"
            value={this.state.background}
            onChange={this.handleChange}
            type="text"
            id="background"
          />
          <span>{this.state.errors.background}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.motivation })} >
          
          <label htmlFor="motivation">Motivation</label>
          <input
            name="motivation"
            value={this.state.motivation}
            onChange={this.handleChange}
            type="text"
            id="motivation"
          />
          <span>{this.state.errors.motivation}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.goals })} >
          
          <label htmlFor="goals">Goals</label>
          <input
            name="goals"
            value={this.state.goals}
            onChange={this.handleChange}
            type="text"
            id="goals"
          />
          <span>{this.state.errors.goals}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.friends })} >
          
          <label htmlFor="friends">Friends</label>
          <input
            name="friends"
            value={this.state.friends}
            onChange={this.handleChange}
            type="text"
            id="friends"
          />
          <span>{this.state.errors.friends}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.enemies })} >
          
          <label htmlFor="enemies">Enemies</label>
          <input
            name="enemies"
            value={this.state.enemies}
            onChange={this.handleChange}
            type="text"
            id="enemies"
          />
          <span>{this.state.errors.enemies}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.romance })} >
          
          <label htmlFor="romance">Romance</label>
          <input
            name="romance"
            value={this.state.romance}
            onChange={this.handleChange}
            type="text"
            id="romance"
          />
          <span>{this.state.errors.romance}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.personality })} >
          
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

const mapDispatchToProps = (dispatch) => {
    return{
        saveCharacter: (data) => dispatch(saveCharacter(data))
    }
}

export default connect(null, mapDispatchToProps)(CharacterForm)
