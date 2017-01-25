import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import 'normalize.css';

require('@blueprintjs/core/dist/blueprint.css');
require('@blueprintjs/table/dist/table.css');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
