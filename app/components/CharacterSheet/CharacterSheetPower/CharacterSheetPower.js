import styles from './CharacterSheetPower.less';
import React from 'react';

export default class CharacterSheetPower extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render () {
    let power = this.props.power;
    let powerType;
    let boost;

    switch (power.type) {
      case 'specialAttack':
        powerType = 'Special Attack';
        break;
    }

    if (power.boost) {
      boost = (<div className={styles.boost}><strong>Boost: </strong>{power.boost}</div>);
    }

    return (
      <div className={styles.power}>
        <div className={styles.name}>{power.name}</div>
        <div className={styles.type}><strong>Type: </strong>{powerType}</div>
        <div classname={styles.effect}><strong>Effect: </strong>{power.description}</div>
        {boost}
      </div>
    );
  }
}
