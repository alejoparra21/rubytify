
export function CommonAction (data) {
    return { 
        type: "INITIAL_STATE", 
        payload: data }
}

export function PlaySong (data) {
    return { 
        type: "SET_SONG", 
        payload: data }
}



