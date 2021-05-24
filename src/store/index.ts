import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { initialStoreState, reducers, StoreActionType, StoreState } from "./store";
// import { initialStoreState, reducers, StoreActionType, StoreState } from "./store";

const store = createStore<StoreState, StoreActionType, any, any>
    (reducers, initialStoreState, composeWithDevTools());

export default store;

