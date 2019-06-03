import React, {PureComponent} from 'react';
import style from './style.scss';

export default class UserBar extends PureComponent {
  render() {
    return (
      <div className={style.openInAppButton}>
        <a target={'_blank'} href="/">
          <span>Open in App</span>
        </a>
      </div>
    );
  }
}
