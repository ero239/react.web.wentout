import React, {PureComponent} from 'react';

import TimeAgo from 'timeago-react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/relativeTime';
dayjs.extend(AdvancedFormat);
import classNames from 'classnames';

import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import onClickOutside from 'react-onclickoutside';

import style from '../style.scss';

export default class ParameterDate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      _dateDisplay: false,
      startDate: new Date(),
      isOpen: false
    };

    this.dateDisplay = this.dateDisplay.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  dateDisplay = () => {
    this.setState({
      _dateDisplay: !this.state._dateDisplay
    });
  };
  handleChange = (data) => {
    this.setState({startDate: data});
    this.toggleCalendar();
  };
  toggleCalendar = (e) => {
    e && e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
      _dateDisplay: true
    });
  };
  filterData = (data) => {
    var a = moment();
    var b = moment(data);
    if (a.diff(b, 'days') > 0) {
      return false;
    } else {
      return true;
    }
  };

  handleClickOutside = (evt) => {
    this.setState({
      _dateDisplay: false
    });
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
    var _day = moment(this.state.startDate).format('DD.MM.YYYY');
    return (
      <div
        className={
          this.state._dateDisplay
            ? _sSearchBarParametersLineItemWrapperActive
            : style.sSearchBarParametersLineItemWrapper
        }
      >
        <div className={style.sSearchBarParametersLineItem}>
          <div
            className={
              this.state._dateDisplay
                ? _sSearchBarParametersLineItemImlineActive
                : style.sSearchBarParametersLineItemInline
            }
          >
            {this.state._dateDisplay ? (
              <span role="button" onClick={() => this.toggleCalendar()}>
                {_day}
              </span>
            ) : (
              <span role="button" onClick={() => this.toggleCalendar()}>
                data
              </span>
            )}
            {this.state._dateDisplay ? (
              <button type="button" onClick={() => this.dateDisplay()}>
                <img
                  width="16"
                  height="16"
                  title=""
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAwcNMA62VQlCAAAA40lEQVQoz32RwVnCUBCEJ3wJLYDaAeBBIdADJcjRqOWQFwPVYBEgeXgKZ18JXH4PecEg+Zzj7M7O7qzkwT0ZBQ5HgWGkJuiywvJMT5LokWDJ6f6WP0gJLyQhho1vYU2qFmDIK29LKLFgfC6NWUhEHBiKjMSTJbEkEVNWzbySCkvf6x4omfFIydQztxTCNVxjjhyrOZ757uh/ICw3DYvphcUde2F4OS85+bPkG0sxajlzwpNExBcDSeSYVvt3sjrqzVXUUR11RwpOmivUjsQ/q0+irQLNg1NTMyRlj8PxyZJBzf8An+CxdFKOUgEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDMtMDdUMTI6NDg6MTQrMDE6MDBUuUdwAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAzLTA3VDEyOjQ4OjE0KzAxOjAwJeT/zAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                />
              </button>
            ) : (
              <button type="button" onClick={() => this.toggleCalendar()}>
                <img
                  width="16"
                  height="16"
                  title=""
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA1VBMVEUAAAAAbO8AbfAAbfAAbPEAbfAAbPEAAP8Ab/QAbfAAbPAAdusAbvAAbPAAbe8AbvEAbe8Abu8AbvEAbfAAbe8Abe8AbvAAbvAAbfEAbfEAbe8AbfAAbfAAafAAbPAAcewAbfAAbvAAb+4AZv8AbfAAbfAAbfAAbfAAbPEAbvAAbPAAgP8AZu4AbPAAbfAAbfEAbPAAceMAbfMAbfAAdOgAbfAAbvEAbfEAYP8Abe8AbPEAbvEAVf8AcfEAbfAAZuYAbfAAbu8AbPAAbfAAbPAAbfAAAAC6gLKJAAAARXRSTlMAUP6YoP1JARdlrg0ztV6QkUGO0ZNgqkOxWZTS0BFCG4iHHg/fu8vgf2aEAg+GZ35oCSrTC3VYbAhiR0gDEncKzaOn9WO50SW9AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+MDBw0yEQlrZjUAAACqSURBVBjTdc7HDoJgEIXRK1jAimLHrmADG9JUbDjv/0r+ICG68FvM4iQ3GQApjkdUOpNlNyeIlC8UWYUSlYUcKhKDKrGqDKQa5HqDmq0QWm3qdGUovf5gOAphPBlMFQUKzVSNojR1TiH8FMJimbSKYK0bGyy22Bn6/gMHMsFxMOkQw9Gy4TiwrWMMrndCx8bZc/9MLj5/hSThyvs3Bnd6jJKedIcYfP8VvN7hPyhrN+dd1QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMy0wN1QxMjo1MDoxNyswMTowMLcIwtkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDMtMDdUMTI6NTA6MTcrMDE6MDDGVXplAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
                />
              </button>
            )}
            {this.state.isOpen && (
              <DatePicker
                allowSameDay
                filterDate={this.filterData}
                selected={this.state.startDate}
                onChange={this.handleChange}
                withPortal
                inline
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

/* {this.state._dateDisplay ? (
  <span role="button" onClick={() => this.toggleCalendar()}>
    {_day}
  </span>
) : (
  <span role="button" onClick={() => this.toggleCalendar()}>
    data
  </span>
)}
<button type="button" onClick={() => this.toggleCalendar()}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 52 52"
    style="enable-background:new 0 0 52 52;"
  >
    <path
      d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"
      data-original="#000000"
      class="active-path"
      data-old_color="#ffffff"
      fill="#ffffff"
    />
    <path
      d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0   s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36   s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293   c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z"
      data-original="#000000"
      class="active-path"
      data-old_color="#ffffff"
      fill="#ffffff"
    />
  </svg>
</button>
<button type="button" onClick={() => this.toggleCalendar()}>
  <svg xmlns="http://www.w3.org/2000/svg" width="512px" height="512px" viewBox="0 0 511.634 511.634">
    <g>
      <path
        d="M482.513,83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261   C397.906,4.475,387.157,0,374.591,0h-18.268c-12.565,0-23.318,4.475-32.264,13.422c-8.949,8.945-13.422,19.701-13.422,32.261v27.41   h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261C178.64,4.475,167.886,0,155.321,0H137.05   c-12.562,0-23.317,4.475-32.264,13.422c-8.945,8.945-13.421,19.701-13.421,32.261v27.41H54.823c-9.9,0-18.464,3.617-25.697,10.85   c-7.233,7.232-10.85,15.8-10.85,25.697v365.453c0,9.89,3.617,18.456,10.85,25.693c7.232,7.231,15.796,10.849,25.697,10.849h401.989   c9.897,0,18.47-3.617,25.694-10.849c7.234-7.234,10.852-15.804,10.852-25.693V109.639   C493.357,99.739,489.743,91.175,482.513,83.942z M347.187,45.686c0-2.667,0.849-4.858,2.56-6.567   c1.711-1.711,3.901-2.568,6.57-2.568h18.268c2.67,0,4.853,0.854,6.57,2.568c1.712,1.712,2.567,3.903,2.567,6.567v82.224   c0,2.666-0.855,4.853-2.567,6.567c-1.718,1.709-3.9,2.568-6.57,2.568h-18.268c-2.669,0-4.859-0.855-6.57-2.568   c-1.711-1.715-2.56-3.901-2.56-6.567V45.686z M127.915,45.686c0-2.667,0.855-4.858,2.568-6.567   c1.714-1.711,3.901-2.568,6.567-2.568h18.271c2.667,0,4.858,0.854,6.567,2.568c1.711,1.712,2.57,3.903,2.57,6.567v82.224   c0,2.666-0.855,4.856-2.57,6.567c-1.713,1.709-3.9,2.568-6.567,2.568H137.05c-2.666,0-4.856-0.855-6.567-2.568   c-1.709-1.715-2.568-3.901-2.568-6.567V45.686z M456.812,475.088H54.823v-292.36h401.989V475.088z"
        fill="#006DF0"
      />
    </g>
  </svg>
</button>
{this.state.isOpen && (
  <DatePicker allowSameDay selected={this.state.startDate} onChange={this.handleChange} withPortal inline />
)} */
