import React from 'react';
import ReactDOM from 'react-dom';
import Dash from './dash';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dash />, document.getElementById('root'));
registerServiceWorker();
