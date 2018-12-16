const FETCHING_VOTES = "FETCHING_VOTES";
const FETCH_VOTES_SUCCESS = "FETCH_VOTES_SUCCESS";
const FETCH_VOTES_FAILED = "FETCH_VOTES_FAILED";
const ADDING_VOTE = "ADDING_VOTE";
const ADD_VOTE_SUCCESS = "ADD_VOTE_SUCCESS";
const ADD_VOTE_FAILED = "ADD_VOTE_FAILED";


const fetchingVotes = () => {
    return {
        type: FETCHING_VOTES
    }
}

const fetchVotesSuccess = votes => { 
    return {
        type: FETCH_VOTES_SUCCESS,
        payload: votes
    }
}

const fetchVotesFailed = err => {
    return {
        type: FETCH_VOTES_FAILED,
        payload: err
    }
}

const addingVote = () => {
    return {
        type: ADDING_VOTE
    }
}

const addVoteSuccess = vote => {
    return {
        type: ADD_VOTE_SUCCESS,
        payload: vote
    }
}

const addVoteFailed = err => {
    return {
        type: ADD_VOTE_FAILED,
        payload: err
    }
}



export {
    FETCHING_VOTES,
    FETCH_VOTES_FAILED,
    FETCH_VOTES_SUCCESS,
    ADDING_VOTE,
    ADD_VOTE_FAILED,
    ADD_VOTE_SUCCESS,
    fetchVotesFailed,
    fetchingVotes,
    fetchVotesSuccess,
    addingVote,
    addVoteFailed,
    addVoteSuccess
}