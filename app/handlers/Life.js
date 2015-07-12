import React from 'react';

import LifeComponent from '../components/Life/Life';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';


const redux = createRedux(stores);

class Life extends React.Component {

    static contextTypes = {
        router: React.PropTypes.func
    };

    render() {
        return (
            <Provider redux={redux}>
              {() =>
                <LifeComponent />
              }
            </Provider>
        );
    }
}

export default Life;
