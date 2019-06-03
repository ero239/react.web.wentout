import React, {PureComponent} from 'react';
import TimeAgo from 'timeago-react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/relativeTime';
dayjs.extend(AdvancedFormat);
import classNames from 'classnames';
import EventBar from '../../../components/EventBarLayout/EventBar.jsx';

import style from '../style.scss';
import style_fonts from '../../../style_fonts.scss';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className={style.sResultsLayout}>
        <header className={style.sResultsLayoutHeader}>
          <button
            onClick={() => {
              this.props.isResults();
            }}
          >
            Suggestions
          </button>
          <i />
          <span>Sports</span>
        </header>
        <main className={style.sResultsLayoutMain}>
          <div className={style.sResultsLayoutMainFlex}>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
            <div className={style.sResultsLayoutMainItemWrapper}>
              <EventBar />
            </div>
          </div>
        </main>
      </section>
    );
  }
}
