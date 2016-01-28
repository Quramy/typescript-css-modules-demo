import * as ReactDOM from 'react-dom';
import * as React from 'react';

import App from './components/App';

if (typeof document !== 'undefined') {
  ReactDOM.render(React.createElement(App), document.getElementById('outlet'));
}

export default App;
