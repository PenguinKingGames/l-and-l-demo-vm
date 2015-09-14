import styles from './OOCNotice.less';
import React from 'react';

export default class OOCNotice extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render() {

    return(
      <div className={styles.OOCNotice}>
        <div className={styles.OOCHeading}>
          {this.props.notice.heading}
        </div>
        <div>
          {this.props.notice.body}
        </div>
      </div>
    );

  }

}
