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
          <div to="/user/dsf" className={style.eBarHeaderCreator}>
            <Link to="/user/dsf">
              <img src={'https://az616578.vo.msecnd.net/files/2016/07/26/6360509435221705861699506351_redbull.jpg'} />
            </Link>
            <Link to="/user/dsf">
              <span>rebbullsdgfergergergregergregregre435345344</span>
            </Link>
          </div>
          <Link to="/event/24tr34" className={style.eBarHeaderTime}>
            <span>in 1 days</span>
          </Link>
        </div>

        <Link to="/event/adfd" className={style.eBarImg}>
          <img
            src={
              'http://image2.redbull.com/rbcom/010/2013-06-08/P-20130610-00100/0010/1/1500/1000/1/s%C4%99dziowie-czuwali.jpg'
            }
          />
        </Link>
        <div className={style.eBarInfo}>
          <div className={style.eBarInfoMetrix}>
            <div className={style.eBarInfoMetrixBlock}>
              <span>5744</span>
              <p>people go</p>
            </div>
            <i />
            <div className={style.eBarInfoMetrixBlock}>
              <span>64345</span>
              <p>views</p>
            </div>
          </div>
          <Link to="/event/dsgf" className={style.eBarInfoTitle}>
            <h3>Соревнования Red Bull skateboarding в Москве </h3>
          </Link>
          <a
            className={style.eBarInfoAddress}
            href={'https://www.google.com/maps/?q=@' + this.props.latitude + ',' + this.props.longitude}
          >
            <i />
            <address>Luzhnetskaya emb., 24, p. 1, Moscow</address>
          </a>
        </div>
      </div>
    );
  }
}
