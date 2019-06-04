import React, {PureComponent} from 'react';
import classNames from 'classnames';

import style from './style.scss';
import styles from '../../../EventPage/containers/Media/style.scss';
import {Link} from 'react-router-dom';

export default class EventsMediaLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/600x480.jpg',
          u_nickname: 'asap',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/1/600x480.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/400x320.jpg',
          u_nickname: 'mark',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/3/400x320.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/800x640.jpg',
          u_nickname: 'asap',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/5/800x640.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/1024x819.jpg',
          u_nickname: 'mark',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/6/1024x819.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/600x480.jpg',
          u_nickname: 'asap',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/2/1280x1024.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/600x480.jpg',
          u_nickname: 'asap',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/1/600x480.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/400x320.jpg',
          u_nickname: 'mark',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/3/400x320.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/800x640.jpg',
          u_nickname: 'asap',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/5/800x640.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/1024x819.jpg',
          u_nickname: 'mark',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/6/1024x819.jpg'
        },
        {
          u_photo: 'http://178.128.174.121/images/wo.web.images/carousel/1/600x480.jpg',
          u_nickname: 'asap',
          m_URL: 'http://178.128.174.121/images/wo.web.images/carousel/2/1280x1024.jpg'
        }
      ]
    };
  }

  render() {
    let _v = true;

    return (
      <div className={style.uLayoutFlex}>
        <div className={style.uLayoutEventsMediaArticle}>
          <div className={style.uLayoutEventsMediaArticleHeaderGrid}>
            <div className={style.uLayoutEventsMediaArticleHeaderFlex}>
              <div className={style.uLayoutEventsMediaArticleHeaderLeft}>
                <div className={style.uLayoutEventsMediaArticleHeaderLeftEventPhotoFlex}>
                  <Link to="/event/wegrw">
                    <img src={'https://wallbox.ru/wallpapers/main/201129/sobaka-vzglead-belyy-3952db6.jpg'} />
                  </Link>
                </div>
                <div className={style.uLayoutEventsMediaArticleHeaderLeftEventTitleFlex}>
                  <Link to="/event/wegrw">
                    <h3>Asap Party</h3>
                  </Link>
                  <Link to="/user/sdgfds">@nickame</Link>
                </div>
              </div>
              <div className={style.uLayoutEventsMediaArticleHeaderRigth}>
                <span>a 2 years ago</span>
              </div>
            </div>
          </div>
          <div className={style.uLayoutEventsMediaArticleMediaGrid}>
            <div
              ref={(mediacontainer) => (this.mediacontainer = mediacontainer)}
              className={style.uLayoutEventsMediaArticleMediaCoverContainer}
            >
              {this.state.array.map((value, i) => {
                console.log(i);
                if (_v) {
                  return (
                    <div className={style.uLayoutEventsMediaArticleMediaCoverSlide}>
                      <div className={style.uLayoutEventsMediaArticleMediaCoverSlideWrapper}>
                        {/* <div className={styles.eMediaMediaHeader}>
                          <img className={styles.eMediaMediaCoverCreatorPhoto} src={value.u_photo} alt="" />
                          <div className={styles.eMediaMediaCoverNickname}>@{value.u_nickname}</div>
                        </div> */}
                        <div className={style.uLayoutEventsMediaArticleMediaMain}>
                          <img
                            className={style.uLayoutEventsMediaArticleMediaCoverItem}
                            src={'https://wallbox.ru/wallpapers/main/201129/sobaka-vzglead-belyy-3952db6.jpg'}
                            onClick={() => this.showFullMedia(i)}
                            alt=""
                          />
                          {/* <div className="play-button-outer">
                                                            <div className="play-button" onClick={() => this.showFullMedia(i, value.u_photo)}></div>
                                                        </div> */}
                          {/* <span className='e-media-media-videocamera-img' src=''></span> */}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className={styles.eMediaMediaCoverSlide}>
                      <img className={styles.eMediaMediaCoverCreatorPhoto} src={value.u_photo} alt="" />
                      <div className={styles.eMediaMediaCoverNickname}>@{value.u_nickname}</div>
                      <img className={styles.eMediaMediaCoverItem} src={value.m_URL} alt="" />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
