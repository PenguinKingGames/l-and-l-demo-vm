import styles from './Test.less';

import React from 'react';

export default class Test extends React.Component {
    constructor(props, context) {
        super(props);
    };

    render() {
        return (
            <div className={styles.root}>
                <div>Hello from Test component, company is: { this.props.company.companyName }</div>

            </div>
        );
    }
}
