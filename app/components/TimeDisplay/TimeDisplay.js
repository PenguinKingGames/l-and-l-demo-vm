import styles from './TimeDisplay.less';
import React from 'react';

export default class TimeDisplay extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render() {
    let time = this.props.time;

    return (
      <div className={styles.timeDisplayFrame}>
        Day {time.day}, {time.phase}
      </div>
    );
  }
}
