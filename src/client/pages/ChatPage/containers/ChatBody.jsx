import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from '../style.scss';
import classNames from 'classnames';
import Linkify from 'react-linkify';
import VisibilitySensor from 'react-visibility-sensor';
/* import R from 'ramda'; */
import $ from 'jquery';

/* import {animateScroll as scroll} from 'react-scroll'; */
/* import {Waypoint} from 'react-waypoint'; */
import {ClipLoader} from 'react-spinners';
/* import {LazyLoad} from 'react-lazyload'; */

export default class Chats extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: [
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Nik',
          time: '13:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Asp',
          time: '4:59',
          text: 'efwfwrefgregergergegegergergergergerger',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200'
        },
        {
          avatar: 'https://avatars.mds.yandex.net/get-pdb/231404/a33da1b1-6dfa-4a5a-a2f5-90c9598bff0a/s1200',
          nickname: 'Brai',
          time: '10:59',
          text: 'efwfwrefgregergergegegergergergergergereiowfnkenfnwenwonfokwenfonwnfwen'
        }
      ],
      _allowedLoadMore: false,
      _scrollPosition: 0,
      _isLoading: false,
      _limit: 0 // Временная переменная
    };

    this.scrollToPosition = this.scrollToPosition.bind(this);
    this.loadData = this.loadData.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }
  componentDidMount = () => {
    // Download the first 30 messages
    setTimeout(() => {
      this.scrollToPosition(this.state.message.length - 1);
    }, 1500);
    setTimeout(() => {
      this.setState({_allowedLoadMore: true});
    }, 2000);
    window.addEventListener('scroll', this.scrollHandler);
  };

  /*
    Загрузка данных 
  */
  loadData = () => {
    /* 
        var _skip = 0;
        var _limit = 30;
        var messeges = messegesFunctions(_skip, _limit);
        this.setState({
          _messages: messeges
        }); 
    */
    if (this.state._limit < 5) {
      // Временная хрень
      if (this.state._allowedLoadMore) {
        // Download next 30 messages
        this.setState({
          message: this.state.message.concat(this.state.message),
          _allowedLoadMore: true,
          _scrollPosition: this.state.message.length, // Длина массива, который загрузили
          _isLoading: false
        });
        setTimeout(() => {
          this.scrollToPosition();
        }, 1000);
      }
      this.setState({
        _isLoading: false,
        _limit: this.state._limit + 1 // Временная хрень
      });
    }
  };

  /*
    Прокручивание позиции scroll до нужной отметки
  */
  scrollToPosition = (position) => {
    if (position != null) {
      this.refs[position].scrollIntoView({block: 'end', behavior: 'instant'});
    } else {
      this.refs[this.state._scrollPosition].scrollIntoView({block: 'end', behavior: 'instant'});
    }
  };

  /*
    Отслеживание позиции скролла 
    Если scrollY == 0 => loadData()
  */
  scrollHandler = (event) => {
    if (window.scrollY == 0) {
      this.setState({
        _isLoading: true
      });
      setTimeout(() => {
        this.loadData();
      }, 2000);
    }
  };

  render() {
    return (
      <section id="chatBody" className={style.chatBody} ref={(chatBody) => (this.chatBody = chatBody)}>
        <div className={style.chatLoading}>
          <ClipLoader sizeUnit={'px'} size={30} color={'#000000'} loading={this.state._isLoading} />
        </div>
        {this.state.message.map((value, i) => {
          return (
            <div className={style.chatBodyMessage} ref={i}>
              <Link to="/user/wdgfwe" className={style.chatBodyMessageAvatar}>
                <img src={value.avatar} />
              </Link>
              <div className={style.chatBodyMessageContent}>
                <div className={style.chatBodyMessageContentHeader}>
                  <Link to="/user/wgwegf">{value.nickname}</Link>
                  <time>{value.time}</time>
                </div>
                <div className={style.chatBodyMessageContentBody}>
                  <Linkify>{i + value.text}</Linkify>
                  {typeof value.img !== 'undefined' ? <img src={value.img} /> : ''}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
