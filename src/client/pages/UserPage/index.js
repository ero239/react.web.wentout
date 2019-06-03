import React, {PureComponent} from 'react';

import {isIOS} from 'react-device-detect';
import style from './style.scss';

import NavBar from '../../components/NavBar/NavBarEvent.jsx';
import Header from './containers/Header.jsx';
import Layout from './containers/Layout.jsx';
import Footer from '../../components/Footers/FooterWhite.jsx';

import OpenInAppButton from '../../components/OpenInAppButton/OpenInAppButton.jsx';

export default class UserPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      _notFound: false
    };
  }

  /* GET  INFORMATION ABOUT EVENT */
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <section id="uPage" className={style.uPage}>
        <NavBar />
        {this.state._notFound ? (
          <div className={style.uNotFound}>
            <div className={style.uNotFoundText}>
              <p>
                User is not found
                <span role="img" aria-label="">
                  {' '}
                  😞
                </span>
              </p>
            </div>
          </div>
        ) : (
          <article>
            <Header />
            <Layout />
          </article>
        )}
        <Footer />
      </section>
    );
  }
}
