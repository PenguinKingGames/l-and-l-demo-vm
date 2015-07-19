import React from 'react';
import { Route, DefaultRoute } from 'react-router';

export default (
    <Route name="root" path="/" handler={require('./handlers/Root')}>
        <Route name="life" path="/life" handler={require('./handlers/LifeHandlers/Life')}>
            <Route name="lifemap" path="/life/map" handler={require('./handlers/LifeHandlers/LifeMap')} />
            <Route name="scene" path="/life/scene/:sceneName" handler={require('./handlers/LifeHandlers/Scene')} />
        </Route>
    </Route>
);
