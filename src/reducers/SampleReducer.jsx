export default function rootReducer(state = {}, action) {
    switch (action.type) {
        case "INITIAL_STATE":
            return { 
                ...state, 
                artist: action.payload 
            };
        case "SET_SONG":
            return {
                ...state, 
                song: action.payload 
            };
        default: return state
    }
}
