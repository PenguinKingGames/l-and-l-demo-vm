import styles from './Dialogue.less';
import React from 'react';

import DialogueChoice from './DialogueChoice/DialogueChoice'

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
    let continueAction = this.props.continueScene;
    let choices;

    if (line.choices) {
      choices = line.choices.map(function(choice, index) {
        return (
          <DialogueChoice choice={choice} continueScene={continueAction} />
        )
      });
    }

    return (
      <div>
        <div className={styles.dialogueFrame} onClick={this.continueScene.bind(this)}>
          <div className={styles.name}>{line.name}</div>
          <div className={styles.dialogueText}>{line.text}</div>
        </div>
        <div className={styles.choicesContainer}>{choices}</div>
      </div>
    );
  }
}

