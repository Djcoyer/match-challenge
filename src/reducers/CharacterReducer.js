import { FETCHING_CHARACTERS, FETCH_CHARACTERS_FAILED, FETCH_CHARACTERS_SUCCESS, ADDING_CHARACTER, ADD_CHARACTER_FAILED, ADD_CHARACTER_SUCCESS, DELETING_CHARACTER, DELETE_CHARACTER_SUCCESS } from "../actions/CharacterActions";
import store from ".";

const CharacterReducer = ((state = {
    isLoading: false,
    characters: [],
    err: null,
    addingCharacter: false
}, action) => {

    switch(action.type) {
        case FETCHING_CHARACTERS: {
            return {...state, isLoading: true};
        };

        case FETCH_CHARACTERS_SUCCESS: {
            return {...state, isLoading: false, characters: action.payload, err: null};
        }

        case FETCH_CHARACTERS_FAILED: {
            return {...state, isLoading: false, characters: [], err: action.payload};
        }

        case ADDING_CHARACTER: {
            return {...state, addingCharacter: true};
        }

        case ADD_CHARACTER_SUCCESS: {
            let characters = state.characters;
            let newCharacters = [...characters, action.payload];
            return {...state, addingCharacter: false, err: null, characters: newCharacters};
        }

        case ADD_CHARACTER_FAILED: {
            return {...state, addingCharacter: false, err: action.payload};
        }

        case DELETING_CHARACTER: {
            return {...state, isLoading: true}
        }

        case DELETE_CHARACTER_SUCCESS: {
            let characters = state.characters;
            characters = characters.filter(c => c.id !== action.payload);
            return {...state, isLoading: false, characters}
        }


        default: {
            return state;
        }
    }
});

export default CharacterReducer;