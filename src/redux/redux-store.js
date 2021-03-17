import { combineReducers, createStore } from "redux";
import listReducer from "./list-reducer";


let reducers = combineReducers({
  list: listReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;
