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
            <img src={'https://static.tgstat.ru/public/images/channels/_0/38/383039867253008a2329c2dd81692a8e.jpg'} />
            <span>RPL_football</span>
          </Link>
          <Link to="/event/24tr34" className={style.eBarHeaderTime}>
            <span>in 2 days</span>
          </Link>
        </div>
        <Link to="/event/adfd" className={style.eBarImg}>
          <img src={'https://bukmeker-obzor.com/wp-content/uploads/2018/09/192066.jpg'} />
        </Link>
        <div className={style.eBarInfo}>
          <div className={style.eBarInfoMetrix}>
            <div className={style.eBarInfoMetrixBlock}>
              <span>56744</span>
              <p>people go</p>
            </div>
            <i />
            <div className={style.eBarInfoMetrixBlock}>
              <span>6454345</span>
              <p>views</p>
            </div>
          </div>
          <Link to="/event/dsgf" className={style.eBarInfoTitle}>
            <h3>30-й тур чемпионата России по футболу </h3>
          </Link>
          <a
            className={style.eBarInfoAddress}
            href={'https://www.google.com/maps/?q=@' + this.props.latitude + ',' + this.props.longitude}
          >
            <i />
            <address>2, Petrovsky Island, St. Petersburg, Russia</address>
          </a>
        </div>
      </div>
    );
  }
}
