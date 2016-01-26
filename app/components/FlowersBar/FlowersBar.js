import styles from './FlowersBar.less';
import React from 'react';

export default class FlowersBar extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render() {
    let flowers = this.props.flowers;

    return (
      <div className={styles.flowersBarFrame}>
        <div className={styles.rose}>Roses: {flowers.rose}</div>
        <div className={styles.lily}>Lilies: {flowers.lily}</div>
        <div className={styles.iris}>Irises: {flowers.iris}</div>
        <div className={styles.azalea}>Azaleas: {flowers.azalea}</div>
        <div className={styles.chrysanthemum}>Chrysanthemums: {flowers.chrysanthemum}</div>
      </div>
    );
  }
}
