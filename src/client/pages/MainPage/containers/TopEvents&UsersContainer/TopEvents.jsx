import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import neo4j from 'neo4j-driver/lib/browser/neo4j-web';
import style from './style.scss';
import style_fonts from '../../../../style_fonts.scss';

import styleS from '../../../../components/EventBarLayout/style.scss';
import classNames from 'classnames';
import EventBar from '../../../../components/EventBarLayout/EventBar.jsx';
import EventBarNew from '../../../../components/EventBarLayoutNew/EventBarLayoutNew.jsx';
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
          photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://hdqwalls.com/download/barbara-palvin-10-320x240.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://hdqwalls.com/download/barbara-palvin-10-320x240.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://hdqwalls.com/download/barbara-palvin-10-320x240.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://hdqwalls.com/download/barbara-palvin-10-320x240.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'
        },
        {
          id: 124,
          title: 'Nike runnnn',
          photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg',
          location: 'Russia, Moscow, Red Square',
          latitude: '-32.5433452',
          longitude: '4.23523452',
          time_start: '13542323432',
          guests: '54',
          // views: record.get('views').toString(),
          // index: record.get('index').toString(),
          u_id: '2423wefgwgfe',
          u_nickname: 'wer',
          u_photo: 'https://img1.goodfon.ru/original/3840x2400/9/84/anna-tatu-model-devushka.jpg'
        }
      ]
    };
    /* this.driver = neo4j.driver(
            'bolt://localhost:7687',
            neo4j.auth.basic(
                'neo4j',
                'tujhjd1997'
            )
        ); */
    this.driver = neo4j.driver('bolt://178.128.174.121:7687', neo4j.auth.basic('ero', 'tujhjd1997'));
  }

  /* GET FIRST 15 TOP EVENTS */
  componentDidMount() {
    const session = this.driver.session();
    session
      .run(
        'MATCH (u:User)-[:Create]->(e:Event)-[:Is]->(:Top) RETURN e.id as id, e.title as title, e.photo as photo, e.location as location, e.latitude as latitude, e.longitude as longitude, e.time_start as time_start, e.guests as guests, u.id as u_id, u.nickname as u_nickname, u.photo as u_photo LIMIT 15'
      )
      .then((result) => {
        if (!result) {
          console.log('NO DATA');
        }
        var _arr = [];
        result.records.forEach((record) => {
          _arr.push({
            id: record.get('id').toString(),
            title: record.get('title').toString(),
            photo: 'http://178.128.174.121/images/original/' + record.get('photo').toString(),
            location: record.get('location').toString(),
            latitude: record.get('latitude').toString(),
            longitude: record.get('longitude').toString(),
            time_start: record.get('time_start').toString(),
            guests: record.get('guests').toString(),
            // views: record.get('views').toString(),
            // index: record.get('index').toString(),
            u_id: record.get('u_id').toString(),
            u_nickname: record.get('u_nickname').toString(),
            u_photo: 'http://178.128.174.121/images/original/' + record.get('u_photo').toString()
          });
        });
        /* this.setState({array: _arr}); */
        session.close();
      })
      .catch((error) => {
        console.log(error);
        session.close();
      });
  }

  openMapTab(lat, lon) {
    window.open('https://www.google.com/maps/?q=@' + {lat} + ',' + {lon}, '_blank');
  }
  render() {
    // let {array} = this.state;
    let _eventTitleStyle = classNames(styleS.eventBarTitle, style_fonts.aTitle);
    let _eventLocationValue = classNames(styleS.eventBarLocationValue, style_fonts.p);
    if (this.state.array) {
      console.log(this.state.array);
    }
    return (
      <section id="topevents-container" className={style.mTopEventsContainerWrapper}>
        <div className={style.mTopEventsContainer}>
          <header className={style.mTopEventsTextGrid}>
            <h2 className={style.mTopEventsText}>Top Events</h2>
          </header>
          <main className={style.mTopEventsEventsRowGrid}>
            <div className={style.mTopEventsCoverContainer}>
              {this.state.array.map((value, i, array) => {
                return (
                  <div className={style.mTopEventsCoverContainerItemWrapper}>
                    <EventBarNew />
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

/* 
$('.m-topevents-cover-item-event-creator-photo').each(function () {
    $(this).height($(this).width());
}); */
{
  /* <EventBar
id={value.id}
title={value.title}
photo={value.photo}
location={value.location}
guests={value.guests}
latitude={value.latitude}
longitude={value.longitude}
time_start={value.time_start}
u_id={value.u_id}
u_nickname={value.u_nickname}
u_photo={value.u_photo}
key={i}
/> */
}
