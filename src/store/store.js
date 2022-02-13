import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import user from "./user/reducer";
import videos from "./videos/reducer";
import favorites from "./favorites/reducer";


import thunk from "redux-thunk";

const state = combineReducers({
  user,
  videos,
  favorites
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(state, composeEnhancers(
  applyMiddleware(thunk)
));