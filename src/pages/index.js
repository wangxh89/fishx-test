import React from 'react';
import { Link } from '@fishx/router';
import styles from './css/style.module.less';
import Pic from './img/pic.png';

const Welcome = () => {
  return (
    <>
      <div className={styles.welcome}>
        <div className={styles.txt}>
          <div className={styles['middle-item']}>
            <b className={styles['middle-item-hack']} />
            <div className={styles['middle-item-body']}>
              <h1>欢迎使用</h1>
              <h2>FishX-desktop</h2>
              <Link to="/list"> gotolist </Link>
            </div>
          </div>
        </div>
        <div className={styles.pic}>
          <div className={styles['middle-item']}>
            <b className={styles['middle-item-hack']} />
            <div className={styles['middle-item-body']}>
              <div className={styles['middle-item-img']}>
                <img src={Pic} width="400" height="306" alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
