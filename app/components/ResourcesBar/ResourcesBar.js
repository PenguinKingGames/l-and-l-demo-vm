import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './ResourcesBar.less';

import Flower from './Flower/Flower'

@connect(state => ({
  character: state.character
}))
export default class ResourcesBar extends React.Component {

  render() {
    let { character, dispatch } = this.props;
    //const actions = bindActionCreators(mapActions, dispatch);

    let flowers = character.flowers.map(function(flower, index) {
      return (
        <Flower flower={flower} key={index} />
      )
    });


    return(
      <div className={styles.resourceBarFrame}>
        {flowers}
      </div>
    )
  }
};
