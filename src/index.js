import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/Global.styles'
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
  ,document.getElementById('root')
);

serviceWorkerRegistration.register()
