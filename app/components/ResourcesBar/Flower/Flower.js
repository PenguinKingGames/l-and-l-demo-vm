import styles from './Flower.less';
import React from 'react';

export default class Flower extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render() {
    let flower = this.props.flower;

    return (
      <div className={styles.flower}>
        {flower.name}: {flower.count}
      </div>
    );
  };
}
