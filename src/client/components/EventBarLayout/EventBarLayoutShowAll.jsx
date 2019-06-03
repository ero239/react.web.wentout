import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
import style_fonts from '../../style_fonts.scss';
import classNames from 'classnames';

export default class EventBarShowAll extends PureComponent {
  render() {
    return (
      <div className={style.eventBarShowAll}>
        <button className={style.eventBarShowAllButton}>
          <span>
            Show all <br />
            events
          </span>
          <i />
        </button>
      </div>
    );
  }
}
