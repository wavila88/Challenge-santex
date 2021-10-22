import { GET_PRODUCTS_DATA } from "../../graphql/queries";
import { addItemToOrder, queryProduts } from "../../service/products.service";
import { ADD_ITEM_TO_ORDER_MUTATION } from "../../graphql/mutations";

export const SET_PRODUCTS_CATALOG = 'SET_PRODUCTS_CATALOG';
export const ADD_CART = 'ADD_CART';

export const callAnyAction = (type, value) => ({type,value});

export const getProductsCatalog = () => dispatch => {

  new Promise((resolve) => {
    resolve();
  }).then(() => {
    return queryProduts(GET_PRODUCTS_DATA);
  }).then((response) => {
    dispatch(callAnyAction(SET_PRODUCTS_CATALOG, response.data.products.items));
  });
};

export const addItemToOrderAction = (variant, quantity = 1) => dispatch => {
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    return addItemToOrder(variant.id, quantity, ADD_ITEM_TO_ORDER_MUTATION);
  }).then((response) => {
    dispatch(callAnyAction(ADD_CART,variant));
  });
};



