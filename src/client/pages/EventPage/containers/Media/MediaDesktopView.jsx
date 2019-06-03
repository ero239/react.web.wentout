import React, {PureComponent} from 'react';
import style from './style.scss';
import classNames from 'classnames';
/* import isNil from 'lodash/fp/isNil'; */
/* import memoizeOne from 'memoize-one' */

export default class MediaDesktopView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      _display: 'none',
      _mediaArray: this.props._mediaArray,
      _mediaIndex: this.props._mediaIndex
    };
    this.showFullMedia = this.showFullMedia.bind(this);
    this.showPrevMedia = this.showPrevMedia.bind(this);
    this.showNextMedia = this.showNextMedia.bind(this);
  }

  showFullMedia = () => {
    console.log('FULL MEDIA');
    this.props.showFullMedia('hi');
  };
  showPrevMedia = (e) => {
    e.stopPropagation();
    console.log(this.state._mediaIndex);
    this.setState({
      _mediaIndex: this.state._mediaIndex - 1
    });
  };
  showNextMedia = (e) => {
    e.stopPropagation();
    console.log(this.state._mediaIndex);
    this.setState({
      _mediaIndex: this.state._mediaIndex + 1
    });
  };

  render() {
    console.log('Full' + this.state._mediaArray + this.state._mediaIndex + this.state._mediaArray.length);
    var _eControlsPrev = classNames(style.eMediaMediaFullViewControlsPrev, style.eMediaMediaFullViewControlsPrevNext);
    var _eControlsNext = classNames(style.eMediaMediaFullViewControlsNext, style.eMediaMediaFullViewControlsPrevNext);
    return (
      <div
        id="e-media-media-full-view"
        className={style.eMediaMediaFullView}
        style={{visibility: this.props._visibility}}
        role="dialog"
      >
        <div className={style.eMediaMediaFullViewControlsBackground} onClick={this.showFullMedia.bind(this)}>
          <div className={style.eMediaMediaFullViewControlsContainer}>
            <div className={style.eMediaMediaFullViewControls}>
              <button
                style={{visibility: this.state._mediaIndex === 0 ? 'hidden' : 'visible'}}
                onClick={this.showPrevMedia}
                className={_eControlsPrev}
              />
              <button
                style={{
                  visibility: this.state._mediaIndex === this.state._mediaArray.length - 1 ? 'hidden' : 'visible'
                }}
                onClick={this.showNextMedia}
                className={_eControlsNext}
              />
            </div>
          </div>
        </div>
        <span onClick={this.showFullMedia}>
          <img
            className={style.eMediaMediaFullViewClose}
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIyNC41MTIgMjI0LjUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjI0LjUxMiAyMjQuNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPHBvbHlnb24gcG9pbnRzPSIyMjQuNTA3LDYuOTk3IDIxNy41MjEsMCAxMTIuMjU2LDEwNS4yNTggNi45OTgsMCAwLjAwNSw2Ljk5NyAxMDUuMjYzLDExMi4yNTQgICAgMC4wMDUsMjE3LjUxMiA2Ljk5OCwyMjQuNTEyIDExMi4yNTYsMTE5LjI0IDIxNy41MjEsMjI0LjUxMiAyMjQuNTA3LDIxNy41MTIgMTE5LjI0OSwxMTIuMjU0ICAiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
            alt=""
          />
        </span>
        {/* <div className='e-media-media-full-view-creator'> */}
        {/* <img className='e-media-media-full-view-creator-photo' src={this.state._mediaArray[this.state._mediaIndex].u_photo} alt=''/> */}
        {/* <a className='e-media-media-full-view-creator-nickname'>@{this.state._mediaArray[this.state._mediaIndex].u_nickname}</a> */}
        {/* </div> */}
        <img
          className={style.eMediaMediaFullViewMedia}
          src={this.state._mediaArray[this.state._mediaIndex].m_URL}
          alt=""
        />
      </div>
    );
  }
}
