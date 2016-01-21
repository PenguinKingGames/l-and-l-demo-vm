import styles from './Facets.less';
import React from 'react';

export default class Facets extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render() {

    let character = this.props.character;

    return (
      <div className={styles.facets}>
        <div className={styles.facet}>
          <div className={styles.facetLabel}>Moxie</div>
          <div className={styles.facetValue}>{character.facets.moxie}</div>
        </div>
        <div className={styles.facet}>
          <div className={styles.facetLabel}>Focus</div>
          <div className={styles.facetValue}>{character.facets.focus}</div>
        </div>
        <div className={styles.facet}>
          <div className={styles.facetLabel}>Grace</div>
          <div className={styles.facetValue}>{character.facets.grace}</div>
        </div>
        <div className={styles.facet}>
          <div className={styles.facetLabel}>Craft</div>
          <div className={styles.facetValue}>{character.facets.craft}</div>
        </div>
        <div className={styles.facet}>
          <div className={styles.facetLabel}>Shine</div>
          <div className={styles.facetValue}>{character.facets.shine}</div>
        </div>
      </div>
    );
  }
}
