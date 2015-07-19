import React from 'react';

import LifeComponent from '../components/Life/Life';
import { createStore } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';


const lifeStore = createStore(stores);

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
