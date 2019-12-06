import {  FETCH_SONG, FETCH_RANDOM_SONG } from "./types";


export function CommonAction (data) {
    return { 
        type: "INITIAL_STATE", 
        payload: data }
}

export const playSong = (preview_url) => dispatch => {
    dispatch({
        type: FETCH_SONG,
        payload: preview_url
    })
}

export const fetchRandomSong = (randomSong) => dispatch => {
    fetch(`https://rubytify.herokuapp.com/api/v1/genres/${randomSong}/random_song`)
    .then( res => res.json())
    .then( song => dispatch({
        type: FETCH_RANDOM_SONG,
        payload: song.data.preview_url
    }))
}