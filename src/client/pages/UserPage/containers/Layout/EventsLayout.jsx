import React, {PureComponent} from 'react';

import style from './style.scss';

export default class EventsLayout extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={style.uLayoutFlex} style={{backgroundColor: 'black'}} />;
  }
}
