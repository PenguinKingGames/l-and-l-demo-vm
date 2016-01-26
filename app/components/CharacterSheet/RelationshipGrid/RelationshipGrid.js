import styles from './RelationshipGrid.less'
import React from 'react';

import Relationship from './Relationship/Relationship';
import CharacterSheetPower from '../CharacterSheetPower/CharacterSheetPower'

export default class RelationshipGrid extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render () {
    let props = this.props;

    const buildFlowerRelationship = function (flowerType, flowerLabel, relationship) {
      return (
        <div className={styles.relationshipWrapper}>
          <div className={styles.relationshipFlowerLabel}>{flowerLabel}</div>
          <Relationship relationship={relationship} relationshipType={flowerType} powers={props.powers} />
        </div>
      );
    };

    let classID = props.character.class.toLowerCase();
    let classPower = props.powers.class[classID][classID + props.character.level];

    let relationships = props.character.relationships;
    let lily = relationships.lily ? buildFlowerRelationship('lily', 'Lily', relationships.lily) : null;
    let rose = relationships.rose ? buildFlowerRelationship('rose', 'Rose', relationships.rose) : null;
    let iris = relationships.iris ? buildFlowerRelationship('iris', 'Iris', relationships.iris) : null;
    let azalea = relationships.azalea ? buildFlowerRelationship('azalea', 'Azalea', relationships.azalea) : null;
    let crysanthemum = relationships.crysanthemum ? buildFlowerRelationship('crysanthemum', 'Chrysanthemum', relationships.crysanthemum) : null;

    return (
      <div className={styles.relationshipGrid}>
        <div className={styles.relationshipWrapper}>
          <div className={styles.relationshipFlowerLabel}>Class Basic Power</div>
          <div className={styles.powerWrapper}>
            <CharacterSheetPower power={classPower} />
          </div>
        </div>
        {lily}
        {rose}
        {iris}
        {azalea}
        {crysanthemum}
      </div>
    );
  }
}
