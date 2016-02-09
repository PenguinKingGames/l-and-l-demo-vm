import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as gameActions from '../../actions/GameActions';
import * as screenTypes from '../../constants/Screens';

import Scene from 'Scene/Scene'
import SceneTransition from 'SceneTransition/SceneTransition'
import LifeMap from 'LifeMap/LifeMap'
import FlowersBar from 'FlowersBar/FlowersBar'
import CharacterSheetButton from 'CharacterSheetButton/CharacterSheetButton';
import CharacterSheet from 'CharacterSheet/CharacterSheet';
import TimeDisplay from 'TimeDisplay/TimeDisplay';

@connect(state => ({
  game: state.game
}))
export default class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { game, dispatch } = this.props;
    const actions = bindActionCreators(gameActions, dispatch);
    let screen = function() {
      switch (game.screen) {
        case screenTypes.SCENE_TRANSITION:
          return (
            <div>
              <SceneTransition scene={game.scene} actions={actions} />
            </div>
          );
          break;
        case screenTypes.SCENE:
          return (
            <div>
              <Scene scene={game.scene} actions={actions} />
              <FlowersBar flowers={game.character.flowers} />
              <TimeDisplay time={game.time} />
              <CharacterSheetButton open={actions.openCharacterSheet} />
            </div>
          );
          break;
        case screenTypes.LIFEMAP:
          return (
            <div>
              <LifeMap lifeMap={game.lifeMap} scenes={game.scenes} actions={actions} />
              <FlowersBar flowers={game.character.flowers} />
              <TimeDisplay time={game.time} />
              <CharacterSheetButton open={actions.openCharacterSheet} />
            </div>
          );
          break;
        case screenTypes.CHARACTER_SHEET:
          return (
            <CharacterSheet character={game.character} powers={game.powers} actions={actions} />
          );
        break;
        default:
          return (
            <div>Well that went poorly</div>
          );
          break;
      }
    }();

    return(

      <div>
        {screen}
      </div>
    )
  }
};
