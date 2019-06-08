import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {isIOS} from 'react-device-detect';
import queryString from 'query-string';
import _ from 'lodash';

import style from './style.scss';

import NavBar from '../../components/NavBar/NavBarEvent.jsx';
import SearchBarLayout from './containers/SearchBar/SearchBarLayout.jsx';
import SuggestionsLayout from './containers/Suggestions/SuggestionsLayout.jsx';
import ResultsLayout from './containers/Results/ResultsLayout.jsx';
import Footer from '../../components/Footers/FooterWhite.jsx';

import OpenInAppButton from '../../components/OpenInAppButton/OpenInAppButton.jsx';

export default class SearchPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      _isResults: true,
      hashtags: ''
    };
    this.isResults = this.isResults.bind(this);
  }

  /* GET  INFORMATION ABOUT EVENT */
  componentDidMount = () => {
    window.scrollTo(0, 0);

    var parsed = queryString.parse(this.props.location.search);
    if (!_.isNil(parsed['hashtags'])) {
      this.setState({
        hashtags: parsed['hashtags']
      });
    }
    /*console.log([1]);*/
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  isResults = () => {
    this.setState({
      _isResults: !this.state._isResults
    });
  };

  render() {
    console.log(this.state.hashtags);
    return (
      <section id="sPage" className={style.sPage}>
        <NavBar />
        <article>
          <SearchBarLayout hashtags={this.state.hashtags} />
          {this.state._isResults ? <ResultsLayout isResults={this.isResults} /> : <SuggestionsLayout />}
          {isIOS ? <OpenInAppButton /> : ''}
        </article>
        <Footer />
      </section>
    );
  }
}

// приклеиваем данные из store
/* const mapStateToProps = (store) => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    user: store.user
  };
}; */

// в наш компонент App, с помощью connect(mapStateToProps)
/* export default connect(mapStateToProps)(SearchPage); */
