import styles from './CharacterSheet.less';
import React from 'react';

import Background from 'Background/Background'
import Portrait from 'Portrait/Portrait'
import ReturnButton from 'ReturnButton/ReturnButton'
import CharacterBasics from './CharacterBasics/CharacterBasics'
import Facets from './Facets/Facets'
import RelationshipGrid from './RelationshipGrid/RelationshipGrid'

export default class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let powers = this.props.powers;
    let character = this.props.character;
    let actions = this.props.actions;

    return(
      <div>
        <main role="main">
          <Background backgroundImage="ExteriorStudents" />
          <Portrait character={character.name} position="Left" expression="Default" />
          <ReturnButton returnToPrevious={actions.returnToPrevious} />
          <div className={styles.stats}>
            <CharacterBasics character={character} />
            <Facets character={character} />
            <RelationshipGrid character={character} powers={powers} />
          </div>
        </main>
      </div>
    )
  }


}
