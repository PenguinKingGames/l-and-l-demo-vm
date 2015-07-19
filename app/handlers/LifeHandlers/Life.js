import React from 'react';
import { RouteHandler } from 'react-router';

class Life extends React.Component {

    static contextTypes = {
        router: React.PropTypes.func
    };

    render() {
        return (
          <RouteHandler {...this.props} />
        );
    }
}

export default Life;
