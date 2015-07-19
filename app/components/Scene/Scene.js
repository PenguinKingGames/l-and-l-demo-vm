import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as sceneActions from '../../actions/SceneActions';

import Background from 'Background/Background'
import Portrait from 'Portrait/Portrait'
import Dialogue from 'Dialogue/Dialogue'

@connect(state => ({
  scene: state.scene
}))
export default class Scene extends React.Component {

  constructor(props) {
    super(props);
    const actions = bindActionCreators(sceneActions, props.dispatch);
    actions.startScene(props.sceneName);
  }

  render() {
    let { scene, dispatch } = this.props;
    let line = scene.lines[scene.currentLine];
    let portraits =  line.portraits.map(function(portrait, index) {
      return (
        <Portrait key={index} character={portrait.character} position={portrait.position} expression={portrait.expression} />
      )
    });
    const actions = bindActionCreators(sceneActions, dispatch);
    return(
      <div>
        <main role="main">
          <Background backgroundImage={scene.background} />
          {portraits}
          <Dialogue line={line} continueScene={actions.continueScene}  />
        </main>
      </div>
    )
  }
};


