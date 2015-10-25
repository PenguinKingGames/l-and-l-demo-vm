import styles from './CharacterSheetButton.less';
import React from 'react';

export default class CharacterSheetButton extends React.Component {
  constructor(props, context) {
    super(props);
  };

  openCharacterSheet() {
    this.props.open();
  }

  render() {

    return (
      <div className={styles.characterSheetButton} onClick={this.openCharacterSheet.bind(this)}>
        <div className={styles.label}>Character Sheet</div>
      </div>
    );
  }
}

