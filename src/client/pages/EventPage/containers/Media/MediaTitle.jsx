import React, {PureComponent} from 'react';
import style from './style.scss';
import stylePage from '../../style.scss';
import classNames from 'classnames';

export default class MediaTitle extends PureComponent {
  render() {
    return (
      <section id="e-media-title" className={classNames(style.eMediaTitle, stylePage.eGridMaxSize)}>
        <h2 className={stylePage.eSectionTitleValue}>Media</h2>
      </section>
    );
  }
}
