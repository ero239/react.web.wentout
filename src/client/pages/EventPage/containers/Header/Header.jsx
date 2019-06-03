import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import TimeAgo from 'timeago-react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/relativeTime';
import style from './style.scss';
import stylePage from '../../style.scss';
import classNames from 'classnames';
dayjs.extend(AdvancedFormat);

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      /* title: this.props.title,
            nickname: this.props.nickname,
            guests: this.props.guests,
            timeStart: this.props.timeStart,
            timeEnd: this.props.timeEnd,
            views: this.props.views,
            photo: this.props.photo, */
      title: 'Выставка картин Ильи Репина',
      nickname: 'tretyakovgallery',
      guests: '3432',
      timeStart: '1557487300',
      views: '24782',
      photo: 'https://avatars.mds.yandex.net/get-pdb/1572252/471686c2-c1cc-4cce-b6e0-16640ad10fcd/s1200',
      timeToggle: true,
      timeStartToggle: false,
      timeEndToggle: false
    };
    this.changeTime = this.changeTime.bind(this);
    this.changeTimeStart = this.changeTimeStart.bind(this);
    this.changeTimeEnd = this.changeTimeEnd.bind(this);
  }

  changeTime = () => {
    this.setState({
      timeToggle: !this.state.timeToggle,
      timeStartToggle: !this.state.timeStartToggle
    });
  };
  changeTimeStart = () => {
    this.setState({
      timeStartToggle: !this.state.timeStartToggle,
      timeEndToggle: !this.state.timeEndToggle
    });
  };
  changeTimeEnd = () => {
    this.setState({
      timeEndToggle: !this.state.timeEndToggle,
      timeToggle: !this.state.timeToggle
    });
  };

  render() {
    let timeStartFormated = dayjs(parseFloat(this.state.timeStart + '000')).format('HH:mm DD.MM.YY');
    let timeEndFormated = dayjs(parseFloat(this.state.timeStart + '000')).format('HH:mm DD.MM.YY');

    return (
      <section className={classNames(style.eMain, stylePage.eGridMaxSize)}>
        <header className={style.eMainTitleGrid}>
          <h1 className={style.eMainTitleValue}>{this.state.title}</h1>
          {/* <div id='eventmain-eventtitle-button-grid'>
                        <button type='button' className='plus-button' onClick={this.openMapTab}>+</button>
                    </div> */}
        </header>
        <main className={style.eMainGrid}>
          <div className={style.eMainColLeft}>
            <div className={style.eMainFlex}>
              <h3 className={style.eMainFixTitles}>creator</h3>
              <Link
                className={style.eMainValues}
                to="/user/cgcg"
                style={{
                  cursor: 'pointer',
                  color: 'rgb(59, 126, 194)'
                }}
              >
                @{this.state.nickname}
              </Link>
            </div>
            <div className={style.eMainFlex}>
              <h3 className={style.eMainFixTitles}>guests</h3>
              <p className={style.eMainValues}>{this.state.guests}</p>
            </div>
          </div>
          <div className={style.eMainColCenter}>
            <img className={style.eMainPhoto} src={this.state.photo} alt="" />
          </div>
          <div className={style.eMainColRight}>
            <div className={style.eMainFlex}>
              <div>
                <h3 className={style.eMainFixTitles} style={{display: this.state.timeToggle ? 'block' : 'none'}}>
                  time
                </h3>
                <h3 className={style.eMainFixTitles} style={{display: this.state.timeStartToggle ? 'block' : 'none'}}>
                  time start
                </h3>
                <h3 className={style.eMainFixTitles} style={{display: this.state.timeEndToggle ? 'block' : 'none'}}>
                  time end
                </h3>
              </div>
              <div>
                <time
                  dateTime="2019-12-31T23:59:59-02:00"
                  className={style.eMainValues}
                  style={{
                    display: this.state.timeToggle ? 'block' : 'none',
                    cursor: 'pointer',
                    color: 'rgb(59, 126, 194)'
                  }}
                  onClick={this.changeTime}
                >
                  <TimeAgo datetime={this.state.timeStart + '000'} />
                </time>
                <time
                  dateTime="2019-12-31T23:59:59-02:00"
                  className={style.eMainValues}
                  style={{
                    display: this.state.timeStartToggle ? 'block' : 'none',
                    cursor: 'pointer',
                    color: 'rgb(59, 126, 194)'
                  }}
                  onClick={this.changeTimeStart}
                >
                  {timeStartFormated}
                </time>
                <time
                  dateTime="2019-12-31T23:59:59-02:00"
                  className={style.eMainValues}
                  style={{
                    display: this.state.timeEndToggle ? 'block' : 'none',
                    cursor: 'pointer',
                    color: 'rgb(59, 126, 194)'
                  }}
                  onClick={this.changeTimeEnd}
                >
                  {timeEndFormated}
                </time>
              </div>
            </div>
            <div className={style.eMainFlex}>
              <h3 className={style.eMainFixTitles}>views</h3>
              <p className={style.eMainValues}>{this.state.views}</p>
            </div>
          </div>
        </main>
      </section>
    );
  }
}
