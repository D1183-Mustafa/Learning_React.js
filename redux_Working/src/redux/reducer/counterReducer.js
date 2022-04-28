const initialState = {
    counter: 0
}

const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case "ARTTIR":
            return {...state,counter: state.counter + 1}
        case "AZALT":
            return {...state,counter: state.counter - 1}
        case "RESET":
            return {...state,counter: 0}
            
    
        default:
            return state
    }
};

export default counterReducer;