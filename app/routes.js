import React from 'react';
import { Route, DefaultRoute } from 'react-router';

export default (
    <Route name="root" path="/" handler={require('./handlers/Root')}>
        <Route name="life" path="/" handler={require('./handlers/Life')}/>
    </Route>
);
