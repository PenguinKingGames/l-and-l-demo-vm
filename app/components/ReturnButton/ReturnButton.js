import styles from './ReturnButton.less';
import React from 'react';

export default class ReturnButton extends React.Component {
  constructor(props, context) {
    super(props);
  };

  returnToPrevious() {
    this.props.returnToPrevious();
  }

  render() {

    return (
      <div className={styles.returnButton} onClick={this.returnToPrevious.bind(this)}>
        <div className={styles.label}>Return</div>
      </div>
    );
  }
}
