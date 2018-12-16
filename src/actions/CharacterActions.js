const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
const FETCH_CHARACTERS_FAILED = "FETCH_CHARACTERS_FAILED";
const ADDING_CHARACTER = "ADDING_CHARACTER";
const ADD_CHARACTER_SUCCESS = "ADD_CHARACTER_SUCCESS";
const ADD_CHARACTER_FAILED = "ADD_CHARACTER_FAILED";
const DELETING_CHARACTER = "DELETING_CHARACTER";
const DELETE_CHARACTER_SUCCESS = "DELETE_CHARACTER_SUCCESS";
const DELETE_CHARACTER_FAILED = "DELETE_CHARACTER_FAILED";


function fetchingCharacters() {
    return {
        type: FETCHING_CHARACTERS
    }
}

function fetchCharactersSuccess(characters) {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: characters
    }
}

function fetchCharactersFailed(err) {
    return {
        type: FETCH_CHARACTERS_FAILED,
        payload: err
    }
}

function addingCharacter() {
    return {
        type:ADDING_CHARACTER
    }
}

function addCharacterSuccess(character) {
    return {
        type: ADD_CHARACTER_SUCCESS,
        payload: character
    }
}

function addCharacterFailed(err) {
    return {
        type: ADD_CHARACTER_FAILED,
        payload: err
    }
}

function deletingCharacter() {
    return {
        type: DELETING_CHARACTER
    }
}

function deleteCharacterSuccess(id) {
    return {
        type: DELETE_CHARACTER_SUCCESS,
        payload: id
    }
}

function deleteCharacterFailed(err) {
    return {
        type: DELETE_CHARACTER_FAILED,
        payload: err
    }
}



export {
    FETCHING_CHARACTERS,
    FETCH_CHARACTERS_FAILED,
    FETCH_CHARACTERS_SUCCESS,
    ADDING_CHARACTER,
    ADD_CHARACTER_FAILED,
    ADD_CHARACTER_SUCCESS,
    DELETE_CHARACTER_FAILED,
    DELETE_CHARACTER_SUCCESS,
    DELETING_CHARACTER,

    addingCharacter,
    addCharacterFailed,
    addCharacterSuccess,
    fetchingCharacters,
    fetchCharactersFailed,
    fetchCharactersSuccess,
    deleteCharacterFailed, 
    deleteCharacterSuccess,
    deletingCharacter
};