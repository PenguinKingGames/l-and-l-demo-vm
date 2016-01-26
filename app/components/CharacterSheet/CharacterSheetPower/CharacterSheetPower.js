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
      case 'utility':
        powerType = 'Utility';
        break;
      case 'basicAttack':
        powerType = 'Basic Attack';
        break;
    }

    if (power.boost) {
      boost = (<div className={styles.boost}><span className={styles.label}>Boost: </span>{power.boost}</div>);
    }

    return (
      <div className={styles.power}>
        <div className={styles.name}>{power.name}</div>
        <div className={styles.level}><span className={styles.label}>Level: </span>{power.level}</div>
        <div className={styles.type}><span className={styles.label}>Type: </span>{powerType}</div>
        <div classname={styles.effect}><span className={styles.label}>Effect: </span>{power.description}</div>
        {boost}
      </div>
    );
  }
}
