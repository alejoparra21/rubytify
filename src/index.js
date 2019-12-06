import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rubytify from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Rubytify />, document.getElementById('root'));

serviceWorker.unregister();
