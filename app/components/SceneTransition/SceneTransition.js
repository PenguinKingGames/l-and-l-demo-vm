import React from 'react';
import styles from './SceneTransition.less';

import Background from 'Background/Background';

export default class SceneTransition extends React.Component {

  constructor(props) {
    super(props);
  }

  startScene() {
    this.props.actions.startScene(this.props.scene)
  }

  render() {
    let scene = this.props.scene;
    let actions = this.props.actions;
    return(
      <div>
        <main role="main">
          <Background backgroundImage={scene.background} />
          <div className={styles.transitionCard} onClick={this.startScene.bind(this)}>
            <div className={styles.transitionTitle}>{scene.name}</div>
            <div className={styles.transitionSubTitle}>{scene.description}</div>
          </div>
        </main>
      </div>
    )
  }
};
