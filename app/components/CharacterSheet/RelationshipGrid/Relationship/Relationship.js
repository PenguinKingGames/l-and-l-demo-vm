import styles from './Relationship.less';
import React from 'react';

import CharacterSheetPower from '../../CharacterSheetPower/CharacterSheetPower'

export default class Relationship extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render () {
    let relationship = this.props.relationship;
    let power = this.props.powers[this.props.relationshipType][relationship.powerTree][relationship.power];

    return (
      <div className={styles.relationship}>
        <div className={styles.relationshipHeader}>
          <span className={styles.name}>{relationship.characterName}</span>
          <span className={styles.relationshipLabel}> ({relationship.relationshipLabel})</span>
          <CharacterSheetPower power={power} />
        </div>

      </div>
    );
  }
}
