import {FETCHING_VOTES, FETCH_VOTES_FAILED,
    FETCH_VOTES_SUCCESS, ADDING_VOTE,
    ADD_VOTE_FAILED, ADD_VOTE_SUCCESS} from '../actions/VoteActions';


export default ((state = {
    votes: [],
    err: null,
    isLoading: false,
    voteSubmitted: false
}, 
    action) => {

        switch(action.type) {
            case FETCHING_VOTES: {
                return {...state, isLoading: true}
            }

            case FETCH_VOTES_SUCCESS: {
                return {...state, isLoading: false, votes: action.payload, err: null}
            }

            case FETCH_VOTES_FAILED: {
                return {...state, isLoading: false, err: action.payload, votes: []}
            }

            case ADDING_VOTE: {
                return {...state, isLoading: true}
            }

            case ADD_VOTE_SUCCESS: {
                let votes = state.votes;
                let newVotes = [...votes, action.payload]
                return {...state, isLoading: false, votes: newVotes, err: null, voteSubmitted: true}
            }

            case ADD_VOTE_FAILED: {
                return {...state, isLoading: false, err: action.payload}
            }

            default: {
                return state;
            }
        }

});