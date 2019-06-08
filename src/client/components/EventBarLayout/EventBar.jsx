import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
import style_fonts from '../../style_fonts.scss';
import classNames from 'classnames';

export default class EventBar extends PureComponent {
  render() {
    let _eventTitleStyle = classNames(style.eventBarTitle, style_fonts.aTitle);
    let _eventLocationValue = classNames(style.eventBarLocationValue, style_fonts.p);
    console.log(this.props.photo);
    return (
      <Link to="/event/dfe" className={style.eventBar}>
        <div className={style.eventBarHeaderGrid}>
          <div className={style.eventBarHeaderCreatorNicknameGrid}>
            <a className={style_fonts.aLink}>@{this.props.u_nickname}</a>
          </div>
          <div className={style.eventBarHeaderTimeGrid}>
            <p className={style_fonts.aTime}>in 10 months</p>
          </div>
        </div>
        <div className={style.eventBarCreatorPhotoGrid}>
          <img src={this.props.u_photo} alt="" />
        </div>
        <div className={style.eventBarTitleGrid}>
          <h3 className={_eventTitleStyle}>{this.props.title}</h3>
        </div>
        <div className={style.eventBarPhotoGrid}>
          <img src={this.props.photo} alt="" />
        </div>
        <div className={style.eventBarLocationGrid}>
          <h4 style={{fontWeight: '250'}} className={style_fonts.p}>
            Location:
          </h4>
        </div>
        <div className={style.eventBarLocationValueGrid}>
          <p style={{fontWeight: '300'}} className={_eventLocationValue}>
            {this.props.location}
          </p>
        </div>
        <div className={style.eventBarGuestsGrid}>
          <h4 style={{fontWeight: '250'}} className={style_fonts.p}>
            Guests:
          </h4>
        </div>
        <div className={style.eventBarGuestsValueGrid}>
          <p style={{fontWeight: '300'}} className={style_fonts.p}>
            {this.props.guests} people go
          </p>
        </div>
        <div className={style.eventBarFooter}>
          <div className={style.eventBarFooterButtonOpenGrid}>
            <a href={'/event=' + this.props.id} className={style.eventBarFooterButton}>
              <p className={style_fonts.aButton}>Open</p>
            </a>
          </div>
          <div className={style.eventBarFooterButtonShowonmapGrid}>
            <a
              href={'https://www.google.com/maps/?q=@' + this.props.latitude + ',' + this.props.longitude}
              className={style.eventBarFooterButton}
            >
              <p className={style_fonts.aButton}>Show on Map</p>
            </a>
            {/* <button type="button" onClick={this.openMapTab(this.props.latitude, this.props.longitude)} className="m-topevents-cover-item-event-button-showonmap">Show on Map</button> */}
          </div>
        </div>
      </Link>
    );
  }
}
