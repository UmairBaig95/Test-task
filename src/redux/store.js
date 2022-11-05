import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer/rootReducer";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer);

export default store;
