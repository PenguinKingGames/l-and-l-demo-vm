import React from 'react';
import { RouteHandler } from 'react-router';

import ResourcesBar from 'ResourcesBar/ResourcesBar'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as stores from '../../stores';

const reducer = combineReducers(stores);
const lifeStore = createStore(reducer);

class Life extends React.Component {

    static contextTypes = {
        router: React.PropTypes.func
    };

    render() {
        return (
          <div>
            <RouteHandler {...this.props} />
            <Provider store={lifeStore}>
              {() =>
                <ResourcesBar />
              }
            </Provider>
          </div>
        );
    }
}

export default Life;
