import React from 'react';

import styles from './LifeMap.less';

import Background from 'Background/Background'
import AvailableScene from './AvailableScene/AvailableScene'

export default class LifeMap extends React.Component {

  render() {
    let map = this.props.lifeMap;
    let actions = this.props.actions;
    let scenes = this.props.scenes;

    let availableScenes = map.availableScenes.map(function(scene, index) {
      return (
        <AvailableScene map={map} scene={scene} scenes={scenes} preview={actions.previewScene} select={actions.selectScene} key={index} />
      )
    });

    return(
      <div>
        <main role="main">
          <Background backgroundImage={map.background} />
          <div className={styles.availableScenes}>
            {availableScenes}
          </div>
        </main>
      </div>
    )
  }
};

