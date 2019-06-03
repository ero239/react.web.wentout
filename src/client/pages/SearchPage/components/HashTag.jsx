import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import classNames from 'classnames';
import style from '../style.scss';

export default class Hashtag extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      _active: false
    };

    this.hashtagActive = this.hashtagActive.bind(this);
  }

  hashtagActive = (hashtag, index) => {
    this.setState({
      _active: !this.state._active
    });
    this.props.onHashtagActive(hashtag, index);
  };

  render() {
    let _hashtag = this.props.hashtag;
    let _classActive = classNames(style.sSearchBarHashtagsLineItem, style.sSearchBarHashTagsLineItemActive);
    return (
      <div
        className={style.sSearchBarHashtagsLineItemWrapper}
        onClick={() => this.hashtagActive(this.props.hashtag, this.props.index)}
      >
        <div className={this.state._active ? _classActive : style.sSearchBarHashtagsLineItem}>
          <span>#{this.props.hashtag}</span>
        </div>
      </div>
    );
  }
}
