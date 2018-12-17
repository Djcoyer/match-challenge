import db from '../Database';
import {addingCharacter, addCharacterFailed, 
    addCharacterSuccess, fetchCharactersFailed, 
    fetchCharactersSuccess, fetchingCharacters, 
    deleteCharacterSuccess, deleteCharacterFailed} from '../actions/CharacterActions';
import Character from '../models/Character';

let characters = db.collection("characters");


function addCharacter(character) {
    return dispatch => {
        dispatch(addingCharacter());
        characters.add(character)
        .then(docRef => {
            dispatch(addCharacterSuccess({id:docRef.id, ...character}));
        }).catch(err => {
            dispatch(addCharacterFailed(err));
        });
    };
};

function fetchCharacters() {
    return dispatch => {
        dispatch(fetchingCharacters());

        characters.get({

        })
        .then(querySnapshot => {
            let characters = [];
             querySnapshot.forEach(doc => {
                let data = doc.data();
                characters.push(new Character(doc.id, data.name, data.series, data.imgSrc));
            });
            dispatch(fetchCharactersSuccess(characters));

        }).catch(err => {
            dispatch(fetchCharactersFailed(err));
        });
    };
}

function deleteCharacter(id) {
    return dispatch => {
        characters.doc(id).delete()
        .then(() => {
            dispatch(deleteCharacterSuccess(id));
        }).catch(err => {
            dispatch(deleteCharacterFailed(err));
        }); 
    }
};

export {
    fetchCharacters,
    addCharacter,
    deleteCharacter
};