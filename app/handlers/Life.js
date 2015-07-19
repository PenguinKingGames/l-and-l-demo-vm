import React from 'react';

import LifeComponent from '../components/Life/Life';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as stores from '../stores';

const reducer = combineReducers(stores);
const lifeStore = createStore(reducer);

class Life extends React.Component {

    static contextTypes = {
        router: React.PropTypes.func
    };

    render() {
        return (
            <Provider store={lifeStore}>
              {() =>
                <LifeComponent />
              }
            </Provider>
        );
    }
}

export default Life;
