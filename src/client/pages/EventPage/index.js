import React, {PureComponent} from 'react';
import neo4j from 'neo4j-driver/lib/browser/neo4j-web';
import {isIOS} from 'react-device-detect';
import style from './style.scss';

import NavBar from '../../components/NavBar/NavBarEvent.jsx';
import Header from './containers/Header/Header.jsx';
import MediaTitle from './containers/Media/MediaTitle.jsx';
import Media from './containers/Media/Media.jsx';
import MediaDesktopView from './containers/Media/MediaDesktopView.jsx';
import Location from './containers/Location/Location.jsx';
import Description from './containers/Description/Description.jsx';
import Chats from './containers/Chats/Chats.jsx';
import Footer from '../../components/Footers/FooterWhite.jsx';
/* import OpenInAppButton from './containers/OpenInAppButton' */

export default class EventPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      u_nickname: '',
      guests: '',
      time_start: '',
      views: '',
      photo: '',
      location: '',
      description: '',
      _fullView: false,
      _photo: '',
      _mediaArray: [],
      _mediaIndex: 0,
      _notFound: false
    };
    this.showFullMedia = this.showFullMedia.bind(this);
  }

  /* GET  INFORMATION ABOUT EVENT */
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  showFullMedia = (mediaArray, i) => {
    console.log('Event ' + mediaArray + i);
    this.setState({
      _fullView: !this.state._fullView,
      _mediaArray: mediaArray,
      _mediaIndex: i
    });
  };

  renderByType = () => {
    console.log(this.state._fullView);
    let id = this.props.match.params.id;
    return this.state._notFound ? (
      <section>
        <NavBar />
        <div className={style.eNotFound}>
          <div className={style.eNotFoundText}>
            <p>
              Event is not found
              <span role="img" aria-label="">
                {' '}
                😞
              </span>
            </p>
          </div>
        </div>
        <Footer />
      </section>
    ) : (
      <section id="ePageWrapper">
        {this.state._fullView ? (
          <MediaDesktopView
            _mediaArray={this.state._mediaArray}
            _mediaIndex={this.state._mediaIndex}
            showFullMedia={this.showFullMedia}
          />
        ) : (
          ''
        )}
        <section id="e-page" className={style.ePage} style={{pointerEvents: this.state._fullView ? 'none' : 'auto'}}>
          <NavBar />
          <article>
            <Header
              title={this.state.title}
              u_nickname={this.state.u_nickname}
              photo={this.state.photo}
              time_start={this.state.time_start}
              guests={this.state.guests}
              views={this.state.views}
            />
            <MediaTitle />
            <Media id={id} showFullMedia={this.showFullMedia} />
            <Location location={this.state.location} latitude={this.state.latitude} longitude={this.state.longitude} />
            <Description description={this.state.description} />
            <Chats />
          </article>
          <Footer />
        </section>
      </section>
    );
  };

  render() {
    return this.renderByType();
  }
}
