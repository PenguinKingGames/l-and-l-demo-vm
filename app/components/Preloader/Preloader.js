import styles from './Preloader.less';
import React from 'react';

export default class Preloader extends React.Component {
  constructor(props, context) {
    super(props);
  };

  render() {
    return (
      <div className={styles.preloader}>
        <div className={styles.portraitAiyanaDefault}></div>
        <div className={styles.portraitAiyanaEmbarrassed}></div>
        <div className={styles.portraitAiyanaWaiting}></div>
        <div className={styles.portraitAiyanaGrumpy}></div>
        <div className={styles.portraitAiyanaHumble}></div>
        <div className={styles.portraitTakakoDefault}></div>
        <div className={styles.portraitTakakoQuite}></div>
        <div className={styles.portraitTakakoPleaseExplain}></div>
        <div className={styles.portraitTakakoImpressed}></div>
        <div className={styles.portraitTakakoAlarmed}></div>
        <div className={styles.portraitTakakoGuarded}></div>
        <div className={styles.portraitTsukikoDefault}></div>
        <div className={styles.portraitTsukikoOMGAiyana}></div>
        <div className={styles.portraitTsukikoWry}></div>
        <div className={styles.portraitTsukikoFlirt}></div>
        <div className={styles.portraitTsukikoExcited}></div>
        <div className={styles.portraitTsukikoDismissive}></div>
        <div className={styles.portraitRajaniDefault}></div>
        <div className={styles.portraitRajaniHappySurprise}></div>
        <div className={styles.portraitRajaniWut}></div>
        <div className={styles.portraitRajaniFlustered}></div>
        <div className={styles.portraitRajaniHmm}></div>
        <div className={styles.portraitRajaniFacepalm}></div>

        <div className={styles.backgroundClassroom}></div>
        <div className={styles.backgroundExteriorStudents}></div>
        <div className={styles.backgroundExteriorEmpty}></div>
        <div className={styles.backgroundClubroom}></div>
      </div>
    );
  };
}
