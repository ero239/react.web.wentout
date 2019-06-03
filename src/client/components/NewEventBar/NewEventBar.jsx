import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
import style_fonts from '../../style_fonts.scss';
import classNames from 'classnames';

export default class NewEventBar extends PureComponent {
  render() {
    return (
      <div className={style.eBar}>
        <div className={style.eBarHeader}>
          <Link to="/user/dsf" className={style.eBarHeaderCreator}>
            <img
              src={'https://g.foolcdn.com/editorial/images/187129/captura-de-pantalla-2015-12-01-a-las-144754.png'}
            />
            <span>nike_russia</span>
          </Link>
          <Link to="/event/24tr34" className={style.eBarHeaderTime}>
            <span>in 2 days</span>
          </Link>
        </div>
        <Link to="/event/adfd" className={style.eBarImg}>
          <img src={'https://mc.igte.ch/wp-content/uploads/2016/10/SW16081_NIKE_HO16_DAY2_JJ3694_PR.jpg'} />
        </Link>
        <div className={style.eBarInfo}>
          <div className={style.eBarInfoMetrix}>
            <div className={style.eBarInfoMetrixBlock}>
              <span>324</span>
              <p>people go</p>
            </div>
            <i />
            <div className={style.eBarInfoMetrixBlock}>
              <span>6452345</span>
              <p>views</p>
            </div>
          </div>
          <Link to="/event/dsgf" className={style.eBarInfoTitle}>
            <h3>Пробежка в Парке Горького с </h3>
          </Link>
          <a
            className={style.eBarInfoAddress}
            href={'https://www.google.com/maps/?q=@' + this.props.latitude + ',' + this.props.longitude}
          >
            <i />
            <address>Moscow, Krymsky Val, 9s9</address>
          </a>
        </div>
      </div>
    );
  }
}
