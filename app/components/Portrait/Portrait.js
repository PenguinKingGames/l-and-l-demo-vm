import styles from './Portrait.less';
import React from 'react';

export default class Portrait extends React.Component {
    constructor(props, context) {
        super(props);
    };

    render() {
        return (
            <div className={`${styles.portrait} ${styles['portrait' + this.props.character + this.props.expression]} ${styles['portrait' + this.props.position]}`}></div>
        );
    };
}
