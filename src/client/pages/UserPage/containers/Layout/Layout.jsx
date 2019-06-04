import React, {PureComponent} from 'react';
import classNames from 'classnames';

import EventsLayout from './EventsLayout.jsx';
import EventsMediaLayout from './EventsMediaLayout.jsx';

import style from './style.scss';

export default class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      _layout_display: true,
      _layout_button_active: true
    };
    this.changeLayoutTo = this.changeLayoutTo.bind(this);
  }

  changeLayoutTo = () => {
    this.setState({
      _layout_display: !this.state._layout_display,
      _layout_button_active: !this.state._layout_button_active
    });
  };

  render() {
    return (
      <section id="uLayout" className={style.uLayoutGrid}>
        <div className={style.uLayoutNavBarFlex}>
          <button
            className={
              this.state._layout_button_active
                ? classNames(style.uLayoutNavBarButtonActive, style.uLayoutNavBarButton)
                : style.uLayoutNavBarButton
            }
            onClick={this.changeLayoutTo}
          >
            <span>Events</span>
          </button>
          <button
            className={
              this.state._layout_button_active
                ? style.uLayoutNavBarButton
                : classNames(style.uLayoutNavBarButtonActive, style.uLayoutNavBarButton)
            }
            onClick={this.changeLayoutTo}
          >
            <span>Media</span>
          </button>
        </div>
        <div style={{display: this.state._layout_display ? 'block' : 'none'}}>
          <EventsLayout />
        </div>
        <div style={{display: this.state._layout_display ? 'none' : 'block'}}>
          <EventsMediaLayout />
        </div>
      </section>
    );
  }
}
