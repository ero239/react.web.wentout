import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from './pages/MainPage/index.js';
import EventPage from './pages/EventPage/index.js';
import SearchPage from './pages/SearchPage/index.js';
import Terms from './pages/AboutPages/TermofUse.jsx';
import Privacy from './pages/AboutPages/PrivacyPolicy.jsx';
import Investors from './pages/AboutPages/Investors.jsx';
import Company from './pages/AboutPages/Company.jsx';
import NotFound from './pages/NotFoundPage/NotFound.jsx';
import UserPage from './pages/UserPage/index.js';
import ChatPage from './pages/ChatPage/index.js';

import EventBar from './components/EventBarLayout/index.js';

export default function() {
  return (
    <BrowserRouter history={React.browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/event/:id/" component={EventPage} />
        <Route exact path="/event/:id/chat/:chatID" component={ChatPage} />
        <Route path="/search" component={SearchPage} />
        <Route exact path="/about/terms" component={Terms} />
        <Route exact path="/about/privacy" component={Privacy} />
        <Route exact path="/about/investors" component={Investors} />
        <Route exact path="/about/us" component={Company} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/test" component={EventBar} />
        {/* <Route path='/event=:id/media=:id' component={EventMediaMobileView}/> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
