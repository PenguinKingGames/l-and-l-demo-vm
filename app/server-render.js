import React from 'react';
import Router from 'react-router';
import Promise from 'bluebird';
import fs from 'fs';
import ejs from 'ejs';
import jsesc from 'jsesc';

import routes from './routes';

var indexTemplate = ejs.compile(fs.readFileSync(__dirname+'/index.ejs').toString());

export default function renderApp(path) {
    return new Promise(function(resolve) {

        Router.run(routes, path, function (Handler, state) {
            //fetchData(state.routes, state).then(function(fetched) {
                resolve(indexTemplate({
                    node_env: process.env.NODE_ENV,
                    html: React.renderToString(<Handler />)
                }));
            //});
        });
    });
};
