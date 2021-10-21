import { GET_PRODUCTS_DATA } from "../../graphql/queries";
import { queryProduts } from "../../service/products.service";

export const SET_PRODUCTS_CATALOG = 'SET_PRODUCTS_CATALOG';

export const callAnyAction = (type, value) => ({type,value});

export const getProductsCatalog = () => dispatch => {

  new Promise((resolve) => {
    resolve();
  }).then(() => {
    return queryProduts(GET_PRODUCTS_DATA);
  }).then((response) => {
    dispatch(callAnyAction(SET_PRODUCTS_CATALOG, response.data.products.items));
  });
}