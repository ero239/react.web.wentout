import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
import style_fonts from '../../style_fonts.scss';
import classNames from 'classnames';

export default class NeweventNewBar extends PureComponent {
  render() {
    return (
      <Link to="/event/adsfd" className={style.eventNewBarWrapper}>
        <div className={style.eventNewBar}>
          <header className={style.eventNewBarHeader}>
            <span>Пробежка в Парке Горького Nike Running Club</span>
          </header>
          <main className={style.eventNewBarMain}>
            <div className={style.eventNewBarMainLeft}>
              <div className={style.eventNewBarMainItem}>
                <span>Creator</span>
                <p>@ndsgfgfdkmgeg</p>
              </div>
              <div className={style.eventNewBarMainItem}>
                <span>Guests</span>
                <p>3</p>
              </div>
            </div>
            <div className={style.eventNewBarMainCenter}>
              <img src={'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'} />
            </div>
            <div className={style.eventNewBarMainRigth}>
              <div className={style.eventNewBarMainItem}>
                <span>Time</span>
                <p>in 50 minutes</p>
              </div>
              <div className={style.eventNewBarMainItem}>
                <span>Views</span>
                <p>45645</p>
              </div>
            </div>
          </main>
          <div className={style.eventNewBarLocation}>
            <i />
            <address>Moscow, prsakvdkd </address>
          </div>
          <footer className={style.eventNewBarFooter}>
            <Link to="/event/wegferg" className={style.eventNewBarFooterButton}>
              <span>+ join</span>
            </Link>
          </footer>
        </div>
      </Link>
    );
  }
}
