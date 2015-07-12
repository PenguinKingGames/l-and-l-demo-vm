import styles from './Dialogue.less';
import React from 'react';


export default class Dialogue extends React.Component {
  constructor(props, context) {
    super(props);
  };

  continueScene() {
    let line = this.props.line;
    if(line.continueSpec) {
      this.props.continueScene(line.continueSpec)
    }
  }

  render() {
    let line = this.props.line;
    return (
      <div className={styles.dialogueFrame} onClick={this.continueScene.bind(this)}>
        <div className={styles.name}>{line.name}</div>
        <div className={styles.dialogueText}>{line.text}</div>
      </div>
    );
  }
}

