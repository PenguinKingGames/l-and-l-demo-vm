import React from 'react';

import Background from 'Background/Background'
import Portrait from 'Portrait/Portrait'
import Dialogue from 'Dialogue/Dialogue'
import OOCNotice from 'OOCNotice/OOCNotice'

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
    let notice = '';
    if (line.notice) {
      notice = <OOCNotice notice={line.notice} />
    }
    return(
      <div>
        <main role="main">
          <Background backgroundImage={scene.background} />
          {portraits}
          {notice}
          <Dialogue line={line} continueScene={actions.continueScene}  />
        </main>
      </div>
    )
  }
};


