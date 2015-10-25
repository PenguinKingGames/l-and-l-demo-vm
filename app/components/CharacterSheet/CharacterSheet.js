import React from 'react';

import Background from 'Background/Background'
import Portrait from 'Portrait/Portrait'
import ReturnButton from 'ReturnButton/ReturnButton'
import CharacterBasics from './CharacterBasics/CharacterBasics'

export default class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let character = this.props.character;
    let actions = this.props.actions;

    return(
      <div>
        <main role="main">
          <Background backgroundImage="ExteriorStudents" />
          <Portrait character={character.name} position="Left" expression="Default" />
          <ReturnButton returnToPrevious={actions.returnToPrevious} />
          <CharacterBasics character={character} />
        </main>
      </div>
    )
  }


}
