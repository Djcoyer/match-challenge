import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import characters from './CharacterReducer';
import votes from './VoteReducer';

const reducer = combineReducers({characters, votes});
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;