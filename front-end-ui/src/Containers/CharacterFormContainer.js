import React from 'react'
import CharacterForm from '../components/CharacterForm'

class CharacterFormContainer extends React.Component{
    // constructor(props) {
    //     super(props)
    // }

    render(){
        return(
            <div>
                <CharacterForm />
                

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}
export default CharacterFormContainer