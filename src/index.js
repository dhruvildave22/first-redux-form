import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';

import PersistentDrawerLeft from './components/nav-bar';

const routing = (
  <Router>
    <PersistentDrawerLeft />
  </Router >
)

ReactDOM.render(routing, document.getElementById('root'));