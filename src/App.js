import './App.css';
import React, { useState, useEffect } from 'react';

//Libraries
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Components
import Header from './components/ui/Header';
import Content from './components/ui/Content';
import CharacterScreen from './components/ui/CharacterScreen/CharacterScreen';
import Episodes from './components/episodes/Episodes';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/characters" component={Content} />
          <Route exact path="/characters/:id" component={CharacterScreen} />
          <Route path="/episodes" component={Episodes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
