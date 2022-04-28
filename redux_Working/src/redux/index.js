import {createStore,combineReducers} from "redux";
import ToDoReducer from "../todoredux/reducer/ToDoListReducer";
import counterReducer from "./reducer/counterReducer";


const reducers = combineReducers({
    counterReducer:counterReducer,
    ToDoReducer : ToDoReducer
});

// export const combinedStores = () =>{
//     const store = createStore(reducers);
//     return store;
// };

const myStore = createStore(reducers);

export default myStore;