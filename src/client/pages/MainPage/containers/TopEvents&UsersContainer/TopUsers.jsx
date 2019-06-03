import React, {PureComponent} from 'react';
import neo4j from 'neo4j-driver/lib/browser/neo4j-web';
import style from './style.scss';
import style_fonts from '../../../../style_fonts.scss';

import styleS from '../../../../components/EventBarLayout/style.scss';
import classNames from 'classnames';
import UserBar from '../../../../components/UserBarLayout/UserBar.jsx';
/**
 *
 */

export default class TopEvents extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'http://178.128.174.121/images/original/',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'http://178.128.174.121/images/original/'
        }
      ]
    };
  }

  render() {
    // let {array} = this.state;
    let _eventTitleStyle = classNames(styleS.eventBarTitle, style_fonts.aTitle);
    let _eventLocationValue = classNames(styleS.eventBarLocationValue, style_fonts.p);
    if (this.state.array) {
      console.log(this.state.array);
    }
    return (
      <section id="topusers-container" className={style.mTopEventsContainerWrapper}>
        <div className={style.mTopEventsContainer}>
          <header className={style.mTopEventsTextGrid}>
            <h2 className={style.mTopEventsText}>Top Users</h2>
          </header>
          <main className={style.mTopEventsEventsRowGrid}>
            <div className={style.mTopEventsCoverContainer}>
              {this.state.array.map((value, i, array) => {
                return (
                  <div className={style.mTopEventsCoverContainerItemWrapper}>
                    <UserBar />
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </section>
    );
  }
}
