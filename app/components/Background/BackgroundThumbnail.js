import styles from './Background.less';
import React from 'react';

export default class BackgroundThumbnail extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render() {

    return (
      <div className={`${styles.backgroundThumbnail} ${styles['background' + this.props.backgroundImage]}`}>&nbsp;</div>
    );
  }
}



