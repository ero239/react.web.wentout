import React, {PureComponent} from 'react';
import {Helmet} from 'react-helmet';
import {isMobile, isTablet} from 'react-device-detect';

import NavBar from '../../components/NavBar/NavBarMain.jsx';
import Introduction from './containers/InroductionContainer/Introduction.jsx';
import CarouselImages from './containers/CarouselContainer/CarouselImages.jsx';
import AppContainer from './containers/AppContainer/AppContainer.jsx';
import TopEvents from './containers/TopEvents&UsersContainer/TopEvents.jsx';
import DownloadApp from './containers/DownloadAppContainer/DownloadApp.jsx';
import TopUsers from './containers/TopEvents&UsersContainer/TopUsers.jsx';
import Footer from '../../components/Footers/FooterWhite.jsx';

export default class MainPage extends PureComponent {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  renderMobile() {
    return (
      <section id="mainpage">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <NavBar />
        <section className="wrapper">
          <main className="main">
            <Introduction />
            <CarouselImages />
            <AppContainer
              containerID={'map-container'}
              firstLine={'Explore Map'}
              secondLine_1={'Find events around you'}
              secondLine_2={'happening right now'}
            />
            <AppContainer
              containerID={'createevent-container'}
              firstLine={'Create Event'}
              secondLine_1={'Do it for free and share it'}
              secondLine_2={'to the world'}
            />
            <AppContainer
              containerID={'event-container'}
              firstLine={'Go Event'}
              secondLine_1={'Share your memories to the world'}
              secondLine_2={'and chat with like-minded people'}
            />
            <AppContainer
              containerID={'search-container'}
              firstLine={'Find Event'}
              secondLine_1={'Find events by hashtags'}
              secondLine_2={'and categories'}
            />
            <AppContainer
              containerID={'feedback-container'}
              firstLine={'Get Feedback'}
              secondLine_1={'Friends, events, chats'}
              secondLine_2={'and updates are here'}
            />
            <TopEvents />
            <DownloadApp />
            <TopUsers />
          </main>
          <Footer />
        </section>
      </section>
    );
  }
  renderDesktop() {
    return (
      <section id="mainpage">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <NavBar />
        <section className="wrapper">
          <main>
            <Introduction />
            <CarouselImages />
            <AppContainer
              containerID={'map-container'}
              firstLine={'Explore Map'}
              secondLine_1={'Find events around you'}
              secondLine_2={'happening right now'}
            />
            <AppContainer
              containerID={'createevent-container'}
              firstLine={'Create Event'}
              secondLine_1={'Do it for free and share it'}
              secondLine_2={'to the world'}
            />
            <AppContainer
              containerID={'event-container'}
              firstLine={'Go Event'}
              secondLine_1={'Share your memories to the world'}
              secondLine_2={'and chat with like-minded people'}
            />
            <AppContainer
              containerID={'search-container'}
              firstLine={'Find Event'}
              secondLine_1={'Find events by hashtags'}
              secondLine_2={'and categories'}
            />
            <AppContainer
              containerID={'feedback-container'}
              firstLine={'Get Feedback'}
              secondLine_1={'Friends, events, chats'}
              secondLine_2={'and updates are here'}
            />
            <TopEvents />
            <DownloadApp />
            <TopUsers />
          </main>
          <Footer />
        </section>
      </section>
    );
  }

  render() {
    if (isMobile || isTablet) {
      return this.renderMobile();
    } else {
      return this.renderDesktop();
    }
  }
}
