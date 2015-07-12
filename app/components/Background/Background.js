import styles from './Background.less';
import React from 'react';

export default class Background extends React.Component {
    constructor(props, context) {
        super(props);
    };

    render() {
        let imageStyle = {
          backgroundImage: 'url(' + this.props.backgroundImage + ')'
        };

        return (
            <div className={styles.background} style={imageStyle}>&nbsp;</div>
        );
    }
}

