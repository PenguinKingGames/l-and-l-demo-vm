import styles from './RelationshipGrid.less'
import React from 'react';

import Relationship from './Relationship/Relationship';

export default class RelationshipGrid extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render () {
     let relationships = this.props.character.relationships;

     return (
      <div className={styles.relationshipGrid}>
        <div className={styles.relationshipWrapper}>
          <div className={styles.relationshipFlowerLabel}>Lily</div>
          <Relationship relationship={relationships.lily} relationshipType="lily" powers={this.props.powers} />
        </div>
      </div>
    );
  }
}
