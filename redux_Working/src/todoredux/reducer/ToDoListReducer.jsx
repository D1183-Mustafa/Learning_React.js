import { EKLE ,SİL} from "../types/types";

const initialState = {
  counter: 0,
  list: [{ id: 0, text: "Mustafa", complited: false }],
};

const ToDoReducer = (state =initialState, action ) => {
    switch (action.type) {
        case EKLE:
            return {
                ...state,
                counter: state.counter + 1,
                list : [
                    ...state.list,
                    {
                        id:state.counter+1,
                        text:action.payload,
                        complited : false
                    }
                ]
            }
        case SİL:
            return {
                ...state,
                list : state.list.filter((e) => action.payload !== e.id)
            }

    
        default:
            return state;
    }
};

export default ToDoReducer;
