import React from 'react';

import LifeMapComponent from 'LifeMap/LifeMap';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as stores from '../../stores';

const reducer = combineReducers(stores);
const lifeStore = createStore(reducer);

class LifeMap extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func
  };

  render() {
    return (
      <Provider store={lifeStore}>
        {() =>
          <LifeMapComponent />
        }
      </Provider>
    );
  }
}

export default LifeMap;
