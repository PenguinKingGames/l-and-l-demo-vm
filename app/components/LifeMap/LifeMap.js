import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as mapActions from '../../actions/LifeMapActions';

import styles from './LifeMap.less';

import Background from 'Background/Background'
import AvailableScene from './AvailableScene/AvailableScene'

@connect(state => ({
  map: state.lifeMap
}))
export default class LifeMap extends React.Component {

  render() {
    let { map, dispatch } = this.props;
    const actions = bindActionCreators(mapActions, dispatch);

    let availableScenes = map.availableScenes.map(function(scene, index) {
      return (
        <AvailableScene map={map} scene={scene} preview={actions.previewScene} key={index} />
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

