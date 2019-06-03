import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
import stylePage from '../../style.scss';
import classNames from 'classnames';

export default class Chats extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="e-chats" className={classNames(style.eChats, stylePage.eGridMaxSize)}>
        <div classNam={style.eChatsTitleFlex}>
          <h2 className={style.eSectionTitleValue}>Chats</h2>
        </div>
        <div className={style.eChatsMainWrapper}>
          <div className={style.eChatsMainInline}>
            <div className={style.eChatsSlideCover}>
              <Link to="/event/wdfwe/chat/wefwe" className={style.eChatsSlide}>
                <img
                  className={style.eChatsImg}
                  src="https://satellit-travel.com/uploads/images/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D1%8B/%D0%93%D0%A2%D0%93.jpg"
                />
                <a>Главное</a>
              </Link>
            </div>
            <div className={style.eChatsSlideCover}>
              <Link to="/event/wdfwe/chat/wefwe" className={style.eChatsSlide}>
                <img
                  className={style.eChatsImg}
                  src="https://satellit-travel.com/uploads/images/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D1%8B/%D0%93%D0%A2%D0%93.jpg"
                />
                <a>Вопросы</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
