import { combineReducers } from "redux"
import { TodosList,todosListInitialState, todosStoreReducer } from "./reducers/todos.reducer";
import { Actions as TodosActions } from './actions/todos.actions';

export type StoreActionType = TodosActions;

export interface StoreState {
    todos: TodosList;
}

export const initialStoreState: StoreState = {
    todos: todosListInitialState,
};

export const reducers = combineReducers<StoreState>({
    todos: todosStoreReducer,
})