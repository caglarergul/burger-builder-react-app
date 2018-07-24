import * as actionTypes from "./actionTypes";
import axios from '../../axios-orders';


export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
};

export const purchaseBurderStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData) => {
  return dispatch => {
      dispatch(purchaseBurderStart());
      axios.post( '/orders.json', orderData )
          .then( response => {
              console.log(response.log);
              dispatch(purchaseBurgerSuccess(response.data.name, orderData));
          } )
          .catch( error => {
              dispatch(purchaseBurgerFail(error));
          } );
  }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}