import React, {PureComponent} from 'react';

import {isIOS} from 'react-device-detect';
import style from './style.scss';

import EventBar from './EventBar.jsx';

export default class EventBarIndex extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
        <EventBar />
      </section>
    );
  }
}
