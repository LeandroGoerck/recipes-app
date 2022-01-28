import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/index';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route exact path="/foods" component={ MainFoods } />
      <Route exact path="/drinks" component={ MainDrinks } />
      <Route exact path={ `foods/${recipeId}` } component={ FoodDetails } />
      <Route exact path={ `drinks/${recipeId}` } component={ DrinkDetails } /> */}
      {/* <Route
        exact
        path={ `foods/${recipeId}/in-progress` }
        component={ FoodInProgress }
      />
      <Route
        exact
        path={ `drinks/${recipeId}/in-progress` }
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
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } /> */}
    </Switch>
  );
}

export default Routes;
