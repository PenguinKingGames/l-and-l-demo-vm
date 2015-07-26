import React from 'react';

import Background from 'Background/Background'
import Portrait from 'Portrait/Portrait'
import Dialogue from 'Dialogue/Dialogue'

export default class Scene extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let scene = this.props.scene;
    let actions = this.props.actions;
    let line = scene.lines[scene.currentLine];
    let portraits =  line.portraits.map(function(portrait, index) {
      return (
        <Portrait key={index} character={portrait.character} position={portrait.position} expression={portrait.expression} />
      )
    });
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


