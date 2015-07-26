import React from 'react';

import GameComponent from 'Game/Game';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as stores from '../stores';

const reducer = combineReducers(stores);
const gameStore = createStore(reducer);

class Game extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func
  };

  render() {
    return (
      <Provider store={gameStore}>
        {() =>
          <GameComponent />
        }
      </Provider>
    );
  }
}

export default Game;
