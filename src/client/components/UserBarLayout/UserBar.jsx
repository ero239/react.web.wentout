import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
import style_fonts from '../../style_fonts.scss';
import classNames from 'classnames';

export default class UserBar extends PureComponent {
  render() {
    let _userBarHeaderNickname = classNames(style.userBarHeaderNickname, style_fonts.h3);
    return (
      <Link to="/user/wegrweg" className={style.userBarWrapper}>
        <div className={style.userBar}>
          <header className={style.userBarHeader}>
            <span>eRo</span>
          </header>
          <main className={style.userBarMain}>
            <div className={style.userBarMainLeft}>
              <div className={style.userBarMainItem}>
                <span>Followers</span>
                <p>23524</p>
              </div>
              <div className={style.userBarMainItem}>
                <span>Events</span>
                <p>3</p>
              </div>
            </div>
            <div className={style.userBarMainCenter}>
              <img src={'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'} />
            </div>
            <div className={style.userBarMainRigth}>
              <div className={style.userBarMainItem}>
                <span>Following</span>
                <p>423</p>
              </div>
              <div className={style.userBarMainItem}>
                <span>Guests</span>
                <p>45645</p>
              </div>
            </div>
          </main>
          <footer className={style.userBarFooter}>
            <Link className={style.userBarFooterButton} to="/user/weg23r">
              <span className={style_fonts.aButton}>+ follow</span>
            </Link>
          </footer>
        </div>
      </Link>
    );
  }
}
