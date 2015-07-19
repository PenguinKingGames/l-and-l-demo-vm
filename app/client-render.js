import React from 'react';
import Router from 'react-router';
import routes from './routes';

var isWebServer = /http/.test(location.protocol);

export default function() {
  var div = document.getElementById('app');

  Router.run(routes, isWebServer ? Router.HistoryLocation : Router.HashLocation, function (Handler, state) {
       React.render(<Handler />, div);
      /*fetchData(state.routes, state)
        .catch(Promise.CancellationError, function(e) {
          // Swallow cancellations
        });*/
  });
};
