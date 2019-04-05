
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import HomePage from './components/HomePage.jsx'
import HomeEvaluation from './components/HomeEvaluation.jsx'
import FeaturedPage from './components/FeaturedPage.jsx';
import SearchHomes from './components/SearchHomes.jsx';
ReactDOM.render(
  <body>
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/sellyourhome" component={HomeEvaluation} />
      <Route path="/search" component={SearchHomes} />
      <Route path="/featured" component={FeaturedPage} />
    </Switch>
  </Router>
  </body>
  ,
  document.getElementById('app'),
);