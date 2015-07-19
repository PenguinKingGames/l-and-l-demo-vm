import React from 'react';

import SceneComponent from 'Scene/Scene';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as stores from '../../stores';

const reducer = combineReducers(stores);
const lifeStore = createStore(reducer);

class Scene extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func
  };

  render() {
    return (
      <Provider store={lifeStore}>
        {() =>
          <SceneComponent sceneName={this.props.params.sceneName} />
        }
      </Provider>
    );
  }
}

export default Scene;
