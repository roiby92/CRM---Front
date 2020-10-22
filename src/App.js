import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Layout/NavBar'
import Container from './components/Layout/Container'
import './App.css';
import Clients from './components/pages/Clients/Clients';
import { Landing } from './components/pages/Landing';
import Actions from './components/pages/Action/Actions';
import Analytics from './components/pages/Analystics/Analytics';

const App = inject('company')(observer((props) => {
  useEffect(() => {
    props.company.loadData()
  }, [])

  return (
    <Router>
      <NavBar />
      <Container />
      <Route path="/" exact render={() => <Landing />} />
      <Route path="/clients" exact render={() => <Clients />} />
      <Route path="/actions" exact render={() => <Actions />} />
      <Route path="/analytics" exact render={() => <Analytics />} />
    </Router>
  );
}));

export default App;
