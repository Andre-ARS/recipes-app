import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Mainpage from './pages/MainPage';
import RecipeDetails from './pages/RecipeDetails';
import Explore from './pages/Explore';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Mainpage } />
        <Route exact path="/drinks" component={ Mainpage } />
        <Route exact path="/foods/:id" component={ RecipeDetails } />
        <Route exact path="/drinks/:id" component={ RecipeDetails } />
        <Route exact path="/explore" component={ Explore } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
