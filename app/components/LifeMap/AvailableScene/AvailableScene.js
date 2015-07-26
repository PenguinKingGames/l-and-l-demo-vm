import styles from './AvailableScene.less';
import React from 'react';

import BackgroundThumbnail from 'Background/BackgroundThumbnail'

export default class AvailableScene extends React.Component {
  constructor(props, context) {
    super(props);
  };

  previewScene() {
    this.props.preview(this.props.scene);
  }

  selectScene() {
    this.props.select(this.props.scene);
  }

  render() {
    let scene = this.props.scenes[this.props.scene];
    let scenePreview;

    if(this.props.map.previewingScene === this.props.scene) {
      scenePreview = (
        <div>
          <BackgroundThumbnail backgroundImage={scene.background} />
          <div className={styles.description}>{scene.description}</div>
          <a className={styles.select} onClick={this.selectScene.bind(this)}>Select</a>
        </div>
      )
    }

    return (
      <div className={styles.availableSceneFrame} onClick={this.previewScene.bind(this)}>
        <div className={styles.name}>{scene.name}</div>
        {scenePreview}
      </div>
    );
  }
}


