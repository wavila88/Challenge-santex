import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './rootReducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import { useSelector as useReduxSelector ,TypedUseSelectorHook } from 'react-redux';
import { Action, Reducer, Store } from "redux";

interface IState {
  turns: string[];
}

const configureStore = (preloadedState) =>{
  const middelware = [thunk];
  const middelwareEnchancer = applyMiddleware(...middelware);
  const enchancers = [middelwareEnchancer];
  
  const composedEnchancer = composeWithDevTools(...enchancers);
  
  return createStore(rootReducers, preloadedState,composedEnchancer);

};

export const store = configureStore();


