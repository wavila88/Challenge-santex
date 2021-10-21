import {SET_PRODUCTS_CATALOG} from './productsAction';
  
  
  export const INITIAL_STATE = {
    productCatalog: []
  }

  export const ProductsReducer = (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
      case SET_PRODUCTS_CATALOG: {
        return {
          ...state,
          productCatalog: action.value
        }
      } 
      default: return state;
    }
  }