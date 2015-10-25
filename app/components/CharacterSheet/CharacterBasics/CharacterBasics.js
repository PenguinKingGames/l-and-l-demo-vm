import styles from './CharacterBasics.less';
import React from 'react';

export default class CharacterBasics extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render() {

    let character = this.props.character;

    return (
      <div className={styles.characterBasics}>
        <div className={styles.name}>{character.name}</div>
      </div>
    );
  }
}
