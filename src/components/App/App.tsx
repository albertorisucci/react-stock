import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import HomeView from '../../view/HomeView';
import LoginView from '../../view/LoginView';
import NotFoundView from '../../view/NotFoundView';
import ProfileView from '../../view/ProfileView';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/login" exact component={LoginView} />
          <Route path="/profile" exact component={ProfileView} />
          <Route component={NotFoundView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;