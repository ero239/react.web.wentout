import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import TimeAgo from 'timeago-react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/relativeTime';
dayjs.extend(AdvancedFormat);
import classNames from 'classnames';
import EventBar from '../../../../components/EventBar/EventBar.jsx';
import EventBarShowAll from '../../../../components/EventBarLayout/EventBarLayoutShowAll.jsx';
import style from './style.scss';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let _activeHashtag = classNames(style.sSearchBarHashtagsLineItem, style.sSearchBarHashTagsLineItemActive);
    return (
      <section className={style.sSuggestionsLayout}>
        <div className={style.sSuggestionsLayoutSuggestionBox}>
          <header className={style.sSuggestionsLayoutSuggestionBoxHeader}>
            <span>Sport</span>
            <span>Moscow</span>
          </header>
          <div className={style.sSuggestionsLayoutSuggestionBoxMain}>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBarShowAll />
            </div>
          </div>
        </div>
        <div className={style.sSuggestionsLayoutSuggestionBox}>
          <header className={style.sSuggestionsLayoutSuggestionBoxHeader}>
            <span>Sports</span>
          </header>
          <main className={style.sSuggestionsLayoutSuggestionBoxMain}>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
          </main>
        </div>
        <div className={style.sSuggestionsLayoutCategoriesBox}>
          <Link
            to={{pathname: '/search', search: '?name=yahoo+sdfj&class=wemfk'}}
            className={style.sSuggestionsLayoutCategoriesBoxItemWrapper}
          >
            <div className={style.sSuggestionsLayoutCategoriesBoxItem}>
              <img
                src={
                  'http://www.xxx-photo.com/m/photo/t/1404/17/08369/010329-more-michelle-lewin-i-make-no-apologies-shes-so-hot-my-dick-just-caught-fire_t.jpg'
                }
                alt=""
              />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemShadow} />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemInfoWrapper}>
                <div className={style.sSuggestionsLayoutCategoriesBoxItemInfo}>
                  <div className={style.sSuggestionsLayoutCategoriesBoxItemInfoItem}>
                    <span className={_activeHashtag}>#sdgwergre</span>
                  </div>
                  <div className={style.sSuggestionsLayoutCategoriesBoxItemInfoItem}>
                    <span className={_activeHashtag}>#sdgwergre34355345</span>
                  </div>
                  <div className={style.sSuggestionsLayoutCategoriesBoxItemInfoItem}>
                    <span className={_activeHashtag}>#sdgwer</span>
                  </div>
                  <div className={style.sSuggestionsLayoutCategoriesBoxItemInfoItem}>
                    <span className={_activeHashtag}>#sdgwergrgte</span>
                  </div>
                  <div className={style.sSuggestionsLayoutCategoriesBoxItemInfoItem}>
                    <span className={_activeHashtag}>#sdgwergrgte</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className={style.sSuggestionsLayoutCategoriesBoxItemWrapper}>
            <div className={style.sSuggestionsLayoutCategoriesBoxItem}>
              <img
                src={
                  'http://www.xxx-photo.com/m/photo/t/1404/17/08369/010329-more-michelle-lewin-i-make-no-apologies-shes-so-hot-my-dick-just-caught-fire_t.jpg'
                }
                alt=""
              />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemShadow} />
            </div>
          </div>
          <div className={style.sSuggestionsLayoutCategoriesBoxItemWrapper}>
            <div className={style.sSuggestionsLayoutCategoriesBoxItem}>
              <img
                src={
                  'http://www.xxx-photo.com/m/photo/t/1404/17/08369/010329-more-michelle-lewin-i-make-no-apologies-shes-so-hot-my-dick-just-caught-fire_t.jpg'
                }
                alt=""
              />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemShadow} />
            </div>
          </div>
          <div className={style.sSuggestionsLayoutCategoriesBoxItemWrapper}>
            <div className={style.sSuggestionsLayoutCategoriesBoxItem}>
              <img
                src={
                  'http://www.xxx-photo.com/m/photo/t/1404/17/08369/010329-more-michelle-lewin-i-make-no-apologies-shes-so-hot-my-dick-just-caught-fire_t.jpg'
                }
                alt=""
              />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemShadow} />
            </div>
          </div>
          <div className={style.sSuggestionsLayoutCategoriesBoxItemWrapper}>
            <div className={style.sSuggestionsLayoutCategoriesBoxItem}>
              <img
                src={
                  'http://www.xxx-photo.com/m/photo/t/1404/17/08369/010329-more-michelle-lewin-i-make-no-apologies-shes-so-hot-my-dick-just-caught-fire_t.jpg'
                }
                alt=""
              />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemShadow} />
            </div>
          </div>
          <div className={style.sSuggestionsLayoutCategoriesBoxItemWrapper}>
            <div className={style.sSuggestionsLayoutCategoriesBoxItem}>
              <img
                src={
                  'http://www.xxx-photo.com/m/photo/t/1404/17/08369/010329-more-michelle-lewin-i-make-no-apologies-shes-so-hot-my-dick-just-caught-fire_t.jpg'
                }
                alt=""
              />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemShadow} />
            </div>
          </div>
          <div className={style.sSuggestionsLayoutCategoriesBoxItemWrapper}>
            <div className={style.sSuggestionsLayoutCategoriesBoxItem}>
              <img
                src={
                  'http://www.xxx-photo.com/m/photo/t/1404/17/08369/010329-more-michelle-lewin-i-make-no-apologies-shes-so-hot-my-dick-just-caught-fire_t.jpg'
                }
                alt=""
              />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemShadow} />
            </div>
          </div>
          <div className={style.sSuggestionsLayoutCategoriesBoxItemWrapper}>
            <div className={style.sSuggestionsLayoutCategoriesBoxItem}>
              <img
                src={
                  'http://www.xxx-photo.com/m/photo/t/1404/17/08369/010329-more-michelle-lewin-i-make-no-apologies-shes-so-hot-my-dick-just-caught-fire_t.jpg'
                }
                alt=""
              />
              <div className={style.sSuggestionsLayoutCategoriesBoxItemShadow} />
            </div>
          </div>
        </div>
        <div className={style.sSuggestionsLayoutSuggestionBox}>
          <header className={style.sSuggestionsLayoutSuggestionBoxHeader}>
            <span>Sports</span>
          </header>
          <main className={style.sSuggestionsLayoutSuggestionBoxMain}>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBar />
            </div>
          </main>
        </div>
      </section>
    );
  }
}
