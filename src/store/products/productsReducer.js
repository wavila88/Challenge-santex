import {
  SET_PRODUCTS_CATALOG,
  ADD_CART
} from './productsAction';
  
  
  export const INITIAL_STATE = {
    productCatalog: [],
    cart:[],
    amountCart: 0
  }

  export const ProductsReducer = (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
      case SET_PRODUCTS_CATALOG: 
        return {
          ...state,
          productCatalog: action.value
        }
      case ADD_CART: 
        return {
          ...state,
          cart: [...state.cart, action.value],
          amountCart: state.amountCart + action.value.price
        }
      default: return state;
    }
  }