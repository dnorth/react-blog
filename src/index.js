import React from 'react';
import ReactDOM from 'react-dom';
import Dash from './dash';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Dash />, document.getElementById('root'));
registerServiceWorker();
