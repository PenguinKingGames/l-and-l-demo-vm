import React from 'react';
import { RouteHandler } from 'react-router';


class Root extends React.Component {

    static contextTypes = {
        router: React.PropTypes.func
    };

    render() {
        return (
            <div>
                <main role="main">
                    <RouteHandler {...this.props} />
                </main>
            </div>
        );
    }
}

export default Root;
