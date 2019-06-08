import 'babel-polyfill';
import 'whatwg-fetch';

import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';

/* import api from 'api/index'; */
import App from './App';

// global styles
import './styleGlobal.scss';
import './style_modules.css';

// apply polyfill
if (!window.Intl) {
  window.Intl = intl;
}

/* api.setEndpoint('/api'); */

ReactDOM.render(<App />, document.getElementById('app'));
