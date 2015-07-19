import styles from './Background.less';
import React from 'react';

export default class Background extends React.Component {
    constructor(props, context) {
        super(props);
    };

    render() {

        return (
            <div className={`${styles.background} ${styles['background' + this.props.backgroundImage]}`}>&nbsp;</div>
        );
    }
}

1
