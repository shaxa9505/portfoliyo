const initialState = {
    toggle: false
}

function reducer(state = initialState, {type, payload}) {
    switch(type){
        case "TOGGLE" : 
            return {
                ...state,
                toggle: !state.toggle
            }
        default : return state
    }
}

export default reducer;