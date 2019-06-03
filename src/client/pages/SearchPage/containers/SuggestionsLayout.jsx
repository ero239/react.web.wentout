import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import TimeAgo from 'timeago-react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/relativeTime';
dayjs.extend(AdvancedFormat);
import classNames from 'classnames';
import EventBar from '../../../components/EventBarLayout/EventBar.jsx';
import NewEventBar from '../../../components/NewEventBar/NewEventBar.jsx';
import NewEventBar_1 from '../../../components/NewEventBar/NewEventBar.1.jsx';
import NewEventBar_2 from '../../../components/NewEventBar/NewEventBar.2.jsx';
import EventBarShowAll from '../../../components/EventBarLayout/EventBarLayoutShowAll.jsx';
import style from '../style.scss';
import style_fonts from '../../../style_fonts.scss';

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
            <span>in Moscow</span>
          </header>
          <main className={style.sSuggestionsLayoutSuggestionBoxMain}>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <NewEventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <NewEventBar_1 />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <NewEventBar_2 />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <NewEventBar />
            </div>
            <div className={style.sSuggestionsLayoutSuggestionBoxMainFlex}>
              <EventBarShowAll />
            </div>
          </main>
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
