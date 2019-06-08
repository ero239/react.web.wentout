import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';

export default class EventBarShowAll extends PureComponent {
  render() {
    return (
      <div className={style.eventBarShowAll}>
        <button className={style.eventBarShowAllButton}>
          <i />
        </button>
      </div>
    );
  }
}
