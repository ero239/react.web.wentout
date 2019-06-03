import React, {PureComponent} from 'react';
import style from './style.scss';
import stylePage from '../../style.scss';
import classNames from 'classnames';

export default class Location extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      /* longitude: this.props.longitude,
            latitude: this.props.latitude, */
      longitude: '5.45471191406257',
      latitude: '51.44373668041616'
    };
  }

  render() {
    return (
      <section id="e-location" className={classNames(style.eLocation, stylePage.eGridMaxSize)}>
        <div className={stylePage.eSectionTitleFlex}>
          <h2 className={stylePage.eSectionTitleValue}>Location</h2>
          <a
            className={stylePage.eSectionButton}
            target="_blank"
            href={'https://www.google.com/maps/?q=@' + this.state.latitude + ',' + this.state.longitude}
          >
            Show on map
          </a>
        </div>
        <address className={style.eLocationAddressFlex}>
          {/* <p className='e-location-address'>
                        <strong>Kremlin castle</strong><br/>
                         {this.state.location} 
                    </p> */}
          <p className={style.eLocationAddress}>
            <strong>Tretyakov Gallery</strong>
            <br />
            Lavrushinsky per., 10, Moscow
          </p>
        </address>
      </section>
    );
  }
}
