import commonReducer from "./common/commonReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  common: commonReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
