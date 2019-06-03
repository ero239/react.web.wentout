import React, {PureComponent} from 'react';
import classNames from 'classnames';

import styleHeader from '../../EventPage/style.scss';
import style from '../style.scss';

export default class EventsLayout extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={style.uLayoutFlex} style={{backgroundColor: 'black'}} />;
  }
}
