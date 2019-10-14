import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './extra.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
