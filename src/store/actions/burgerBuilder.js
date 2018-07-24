import * as actionTypes from "./actionTypes";


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