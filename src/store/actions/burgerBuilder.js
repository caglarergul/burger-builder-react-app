import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient  = (name) => {
    return {
        ingredientName: name,
        type: actionTypes.ADD_INGREDIENTS
    }
};

export const removeIngredient  = (name) => {
    return {
        ingredientName: name,
        type: actionTypes.REMOVE_INGREDIENTS
    }
};


export const setIngredients = (ingredients) => {
    return {
        type : actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const initIngredients = () => {
  return dispatch => {
      axios.get("https://react-my-burger-ce4af.firebaseio.com/ingredients.json")
          .then(response => {
              dispatch(setIngredients(response.data))
          })
          .catch(error => {
              dispatch(fetchIngredientsFailed())
          });
  };
};

export const fetchIngredientsFailed = () => {
    return {
        type : actionTypes.FETCH_INGREDIENTS_FAILED
    }
}