import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import MainFoods from '../pages/MainFoods';
import MainDrinks from '../pages/MainDrinks';
import FoodDetails from '../pages/FoodDetails';
import DrinkDetails from '../pages/DrinkDetails';
import FoodInProgress from '../pages/FoodInProgress';
import DrinkInProgress from '../pages/DrinkInProgress';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredients';
import ExploreFoodsNationalities from '../pages/ExploreFoodsNationalities';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ MainFoods } />
      <Route exact path="/drinks" component={ MainDrinks } />
      <Route exact path="/foods/:recipeId" component={ FoodDetails } />
      <Route exact path="/drinks/:recipeId" component={ DrinkDetails } />
      <Route
        exact
        path="foods/:recipeId/in-progress"
        component={ FoodInProgress }
      />
      <Route
        exact
        path="drinks/:recipeId/in-progress"
        component={ DrinkInProgress }
      />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodsIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinksIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodsNationalities }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
