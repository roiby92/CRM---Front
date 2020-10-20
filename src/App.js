import React, { useEffect } from 'react';

import { inject, observer } from 'mobx-react'
import DataFile from './data.json'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Layout/NavBar'
import Container from './components/Layout/Container'
import './App.css';
import Clients from './components/pages/Clients';
import { Landing } from './components/pages/Landing';


const App = inject('company')(observer((props) => {

  useEffect(() => {
    props.company.loadDataFromFile(DataFile)
  },[])


  return (
    <Router>
      <NavBar />
      <Container />

      <Route path="/" exact render={() => <Landing />} />
      <Route path="/clients" exact render={() => <Clients />} />
      <Route path="/actions" exact />
      <Route path="/analytics" exact />
    </Router>
  );
}));

export default App;
