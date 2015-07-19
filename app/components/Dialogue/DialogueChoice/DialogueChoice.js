import styles from './DialogueChoice.less';
import React from 'react';


export default class DialogueChoice extends React.Component {
  constructor(props, context) {
    super(props);
  };

  continueScene() {
    let choice = this.props.choice;
    if(choice.continueSpec) {
      this.props.continueScene(choice.continueSpec)
    }
  }

  render() {
    let choice = this.props.choice;


    return (
      <div className={styles.dialogueChoiceFrame} onClick={this.continueScene.bind(this)}>
        {choice.text}
      </div>
    );
  }
}
