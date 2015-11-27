import styles from './Relationship.less';
import React from 'react';

export default class Relationship extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render () {

    let relationship = this.props.relationship;

    return (
      <div className={styles.relationship}>
        <div className="styles.name">{relationship.character}</div>
      <div>
    );
  }
}
