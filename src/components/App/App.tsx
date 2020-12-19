import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom' 
import ProductsView from '../../view/ProductsView';
import LoginView from '../../view/LoginView';
import NotFoundView from '../../view/NotFoundView';
import ProfileView from '../../view/ProfileView';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>
          <Route path="/products" exact component={ProductsView} />
          <Route path="/login" exact component={LoginView} />
          <Route path="/profile" exact component={ProfileView} />
          <Route component={NotFoundView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;