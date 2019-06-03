import React, {PureComponent} from 'react';
import TimeAgo from 'timeago-react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/relativeTime';
dayjs.extend(AdvancedFormat);
import classNames from 'classnames';

import styleHeader from '../../EventPage/style.scss';
import style from '../style.scss';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let _eHeaderSection = classNames(style.uHeaderGrid, styleHeader.eGridMaxSize);
    return (
      <section id="uHeader" className={_eHeaderSection}>
        <header id="uHeaderNickname" className={styleHeader.eMainTitleGrid}>
          <h1 className={styleHeader.eMainTitleValue}>name</h1>
        </header>
        <main id="uHeaderMain" className={styleHeader.eMainGrid}>
          <div className={styleHeader.eMainColLeft}>
            <div className={styleHeader.eMainFlex}>
              <h3 className={styleHeader.eMainFixTitles}>Followers</h3>
              <p className={styleHeader.eMainValues}>12413</p>
            </div>
            <div className={styleHeader.eMainFlex}>
              <h3 className={styleHeader.eMainFixTitles}>Events</h3>
              <p className={styleHeader.eMainValues}>3</p>
            </div>
          </div>
          <div className={styleHeader.eMainColCenter}>
            <img className={styleHeader.eMainPhoto} src={'https://wallbox.ru/wallpapers/main/201129/sobaka-vzglead-belyy-3952db6.jpg'} alt="" />
          </div>
          <div className={styleHeader.eMainColRight}>
            <div className={styleHeader.eMainFlex}>
              <h3 className={styleHeader.eMainFixTitles}>Following</h3>
              <p className={styleHeader.eMainValues}>4321</p>
            </div>
            <div className={styleHeader.eMainFlex}>
              <h3 className={styleHeader.eMainFixTitles}>Guests</h3>
              <p className={styleHeader.eMainValues}>534</p>
            </div>
          </div>
        </main>
        <div id="uHeaderButtons" className={style.uHeaderButtonsGrid}>
          <div className={style.uHeaderButton}>
            <span>Invite</span>
          </div>
          <div className={style.uHeaderButton}>
            <span>+ Follow</span>
          </div>
          <div className={style.uHeaderButton}>
            <span>Message</span>
          </div>
        </div>
        <div id="uHeaderDescription" className={style.uHeaderDescriptionGrid}>
          <div className={style.uHeaderDescriptionNameFlex}>
            <p>name surname</p>
          </div>
          <div className={style.uHeaderDescriptionValueFlex}>
            <p>Я умничка</p>
          </div>
        </div>
      </section>
    );
  }
}
