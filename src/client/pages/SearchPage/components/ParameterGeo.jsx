import React, {PureComponent} from 'react';

import ParameterGeoSuggestions from './ParameterGeoSuggestions.jsx';

import classNames from 'classnames';

import style from '../style.scss';

export default class ParameterGeo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      _geoDisplay: false,
      _portalDisplay: false,
      _location: null
    };

    this.geoDisplay = this.geoDisplay.bind(this);
    this.portalDisplay = this.portalDisplay.bind(this);
    this.onClickOut = this.onClickOut.bind(this);
  }

  geoDisplay = () => {
    this.setState({
      _geoDisplay: !this.state._geoDisplay
    });
  };
  portalDisplay = () => {
    this.setState({
      _geoDisplay: !this.state._geoDisplay,
      _portalDisplay: true
    });
  };

  onClickOut = (location) => {
    if (location) {
      console.log(location.gmaps.name);
      this.setState({
        _portalDisplay: false,
        _geoDisplay: true,
        _location: location.gmaps.name
      });
    } else if (this.state._location != null) {
      this.setState({
        _geoDisplay: true,
        _portalDisplay: false
      });
    } else {
      this.setState({
        _geoDisplay: false,
        _portalDisplay: false
      });
    }
  };

  render() {
    let _sSearchBarParametersLineItemWrapperActive = classNames(
      style.sSearchBarParametersLineItemWrapper,
      style.sSearchBarParametersLineItemWrapperActive
    );
    let _sSearchBarParametersLineItemImlineActive = classNames(
      style.sSearchBarParametersLineItemInline,
      style.sSearchBarParametersLineItemInlineActive
    );
    return (
      <div
        className={
          this.state._geoDisplay
            ? _sSearchBarParametersLineItemWrapperActive
            : style.sSearchBarParametersLineItemWrapper
        }
      >
        <div className={style.sSearchBarParametersLineItem}>
          <div
            className={
              this.state._geoDisplay
                ? _sSearchBarParametersLineItemImlineActive
                : style.sSearchBarParametersLineItemInline
            }
          >
            {this.state._geoDisplay ? (
              <span role="button" onClick={() => this.portalDisplay()}>
                {this.state._location}
              </span>
            ) : (
              <span role="button" onClick={() => this.portalDisplay()}>
                location
              </span>
            )}
            {this.state._geoDisplay ? (
              <button type="button" onClick={() => this.geoDisplay()}>
                <img
                  title=""
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAwcNMA62VQlCAAAA40lEQVQoz32RwVnCUBCEJ3wJLYDaAeBBIdADJcjRqOWQFwPVYBEgeXgKZ18JXH4PecEg+Zzj7M7O7qzkwT0ZBQ5HgWGkJuiywvJMT5LokWDJ6f6WP0gJLyQhho1vYU2qFmDIK29LKLFgfC6NWUhEHBiKjMSTJbEkEVNWzbySCkvf6x4omfFIydQztxTCNVxjjhyrOZ757uh/ICw3DYvphcUde2F4OS85+bPkG0sxajlzwpNExBcDSeSYVvt3sjrqzVXUUR11RwpOmivUjsQ/q0+irQLNg1NTMyRlj8PxyZJBzf8An+CxdFKOUgEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDMtMDdUMTI6NDg6MTQrMDE6MDBUuUdwAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAzLTA3VDEyOjQ4OjE0KzAxOjAwJeT/zAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                />
              </button>
            ) : (
              <button type="button" onClick={() => this.portalDisplay()}>
                <img
                  title=""
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAq1BMVEUAAAAAVf8AbPAAbe8AbfAAZuYAbfAAbfAAbvAAavEAbfAAbfAAbfEAbfAAbfAAcfAAbe8AbfEAbu8AbvEAbO8AZu4AbfAAbe8AbvEAa/IAbvAAbfEAbvAAbfAAbvAAbu8AbfAAb/QAbfAAbfAAbfMAbfEAbPEAgP8AbPAAbfAAZv8AbfAAa+0AbfEAbvEAAP8AbfAAbfAAbOsAbfAAbfAAau0AbvEAbfAAAAAZbQWhAAAAN3RSTlMAA2PF9Aq5nZwk/fqhmvUicFtBbZIP85GQTDONZvKHgOsX9/YVfH0EyM0FIytsawG2uxrt7x1YKPaXhgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAwcNNDb6O3TYAAAAjUlEQVQY01WOxQKDQAxEh8VaatSoG3WlSv7/zxqyu5V3mczLIQEYR7me5yoHBj8gIfCNCMlQ0r0cEVWqtTpR1BAR864JtDjaIjo8dTkTop6IPosBMOQYiRjzNJnO5hxKxCK1V5YrfWZtxcb8sd3pvj/YV49J0dMTPpwLcfl2ZFeiW/YjcH88X/gjz83wBgSXFjtNhrMBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTA3VDEyOjUyOjU0KzAxOjAwBl8GgwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0wN1QxMjo1Mjo1NCswMTowMHcCvj8AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
                />
              </button>
            )}
            {this.state._portalDisplay && (
              <div className={style.sSearchBarParametersLineItemPortal}>
                <ParameterGeoSuggestions onClickOut={this.onClickOut} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
