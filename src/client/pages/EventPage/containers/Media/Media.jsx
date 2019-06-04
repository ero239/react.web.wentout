import React from 'react';
import {Link} from 'react-router-dom';
import isEqual from 'react-fast-compare';
import style from './style.scss';

/* import LazyLoad from 'react-lazyload'; */
/* import { isMobile } from 'react-device-detect' */

export default class Media extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /* id: this.props.id, */
      array: [
        {
          u_photo:
            'https://satellit-travel.com/uploads/images/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D1%8B/%D0%93%D0%A2%D0%93.jpg',
          u_nickname: 'tretyakovgallery',
          m_URL:
            'http://www.bt.kiev.ua/published/publicdata/TEST/attachments/SC/products_pictures/RRR%20-%200379%20--%20Repin%20Ilya%20-%20%D0%9A%D0%B0%D0%BA%D0%BE%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D1%80%21.jpg'
        },
        {
          u_photo:
            'https://satellit-travel.com/uploads/images/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D1%8B/%D0%93%D0%A2%D0%93.jpg',
          u_nickname: 'tretyakovgallery',
          m_URL: 'http://www.stydiai.ru/wp-content/uploads/na-dernovoj-skame-1876.jpg'
        },
        {
          u_photo:
            'https://satellit-travel.com/uploads/images/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D1%8B/%D0%93%D0%A2%D0%93.jpg',
          u_nickname: 'tretyakovgallery',
          m_URL: 'https://artchive.ru/res/media/img/orig/work/cc7/198586.jpg'
        },
        {
          u_photo:
            'https://satellit-travel.com/uploads/images/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D1%8B/%D0%93%D0%A2%D0%93.jpg',
          u_nickname: 'tretyakovgallery',
          m_URL: 'https://avatars.mds.yandex.net/get-pdb/1025599/49de57ab-4f13-44b9-9473-acaab105245a/s1200?webp=false'
        },
        {
          u_photo:
            'https://satellit-travel.com/uploads/images/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D1%8B/%D0%93%D0%A2%D0%93.jpg',
          u_nickname: 'tretyakovgallery',
          m_URL: 'http://www.art-catalog.ru/data_picture_2016/picture/24/11476.jpg'
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
      ],
      skip: 0,
      limit: 15,
      stopLimit: false,
      showModal: false,
      loaded: false,
      error: false
    };
    this.showFullMedia = this.showFullMedia.bind(this);
    /* this.showMoreMedia = this.showMoreMedia.bind(this);
        this.handleScroll = this.handleScroll.bind(this); */
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state.array, nextState.array);
  }

  /**
   * Download first group of media items and addEventListner
   */
  componentDidMount = () => {
    console.log('did Mount Event');
    try {
      /* this.setState({
        array: showMediaFunction(this.props.id, 0, 15),
        loaded: true,
        skip: (this.state.skip += 15),
        limit: (this.state.limit += 15)
      }); */
      this.mediacontainer.addEventListener('scroll', this.handleScroll);
    } catch (error) {
      console.log('error event media');
      this.setState({
        loaded: true,
        error: true
      });
    }
  };

  /**
   * Download more media and add it to the array
   */
  /*   showMoreMedia = () => {
    console.log('showMore Event media');
    try {
      let _arr = showMediaFunction(this.props.id, this.state.skip, this.state.limit);
      if (_arr.length < this.state.limit) {
        this.setState({
          stopLimit: true,
          array: [..._arr],
          skip: (this.state.skip += 15),
          limit: (this.state.limit += 15)
        });
      } else {
        this.setState({
          array: [..._arr],
          skip: (this.state.skip += 15),
          limit: this.state.limit + 15
        });
        this.mediacontainer.addEventListener('scroll', this.handleScroll);
      }
    } catch (error) {
      console.log('error event media');
      this.setState({
        loaded: true,
        error: true
      });
    }
  }; */

  /**
   * Handle scroll event from media div container
   */
  /* handleScroll = () => {
        console.log('HANDLE SCROLL');
        if (!this.state.stopLimit) {
            console.log('scrollWidth: '+ this.mediacontainer.scrollWidth+ '  scrollLeft: '+this.mediacontainer.scrollLeft+' clientWidth: '+this.mediacontainer.clientWidth)
            if ((this.mediacontainer.scrollWidth- this.mediacontainer.clientWidth) * 0.6 <= this.mediacontainer.scrollLeft) {
                this.showMoreMedia();
                this.mediacontainer.removeEventListener('scroll', this.handleScroll);
                console.log('HANDLE SCROLL REMOVE');
            }
        }
    }; */

  /**
   * Open media on full screen view
   * @param {i} - index of choosen media
   */

  showFullMedia = (i) => {
    console.log('MEDIA ' + this.state.array + i);
    this.props.showFullMedia(this.state.array, i);
  };

  render() {
    console.log('arr  ' + this.state.array);
    let _v = true;
    return (
      /* this.state.array.length !== 0
                ? */
      <section id="e-media-media" className={style.eMediaMedia}>
        <div
          ref={(mediacontainer) => (this.mediacontainer = mediacontainer)}
          className={style.eMediaMediaCoverContainer}
        >
          {this.state.array.map((value, i) => {
            console.log(i);
            if (_v) {
              return (
                <div className={style.eMediaMediaCoverSlide}>
                  <div className={style.eMediaMediaCoverSlideWrapper}>
                    <div className={style.eMediaMediaHeader}>
                      <img className={style.eMediaMediaCoverCreatorPhoto} src={value.u_photo} alt="" />
                      <Link className={style.eMediaMediaCoverNickname} to="/user/">
                        @{value.u_nickname}
                      </Link>
                    </div>
                    <div className={style.eMediaMediaMain}>
                      <img
                        className={style.eMediaMediaCoverItem}
                        src={value.m_URL}
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
                <div className={style.eMediaMediaCoverSlide}>
                  <img className={style.eMediaMediaCoverCreatorPhoto} src={value.u_photo} alt="" />
                  <Link className={style.eMediaMediaCoverNickname} to="/user/">
                    @{value.u_nickname}
                  </Link>
                  <img className={style.eMediaMediaCoverItem} src={value.m_URL} alt="" />
                </div>
              );
            }
          })}
          {/* <img
            className={style.eMediaMediaDefault}
            src="https://cloclo25.datacloudmail.ru/weblink/view/5bQF/4t9nsY8JE?etag=AEC586DB8DEADB8B07FEA6B7C26081544C338762&key=08be0f76d897a2b4b4a061eb795784680db5a285"
          /> */}
        </div>
      </section>
      /* :
                this.state.loaded
                    ?
                    this.state.error
                        ?
                        <p>
                            Some error just happened
                                    </p>
                        :
                        <p>
                            No media yet
                                    </p>
                    :
                    <p>
                        Loading...
                            </p> */
    );
  }
}
