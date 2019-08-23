import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Login from './components/login/Login';
import List from './components/list/List';
import Detail from './components/detail/Detail';

const App = () => {
  return (
    <div className ="App">
      <Router>
        <Route exact path='/' component={ Login }></Route>
        <Route exact path='/contacts' component= { List }></Route>
        <Route path='/contacts/:id' component={ Detail }></Route>
      </Router>
    </div>
  )
}

export default App;
