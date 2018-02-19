import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import CardDetails from './components/CardDetails';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path='/details/*' component={CardDetails} />
    <Route path='/' exact component={App} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
