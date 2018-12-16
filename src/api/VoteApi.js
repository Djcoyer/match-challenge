import db from '../Database';
import { addingVote, fetchingVotes, addVoteSuccess, addVoteFailed, fetchVotesSuccess, fetchVotesFailed } from '../actions/VoteActions';
import Vote from '../models/Vote';


let votes = db.collection("votes");

function addVote(vote) {
    return dispatch => {
        dispatch(addingVote());
        vote.createdOn = new Date();
        
        //Placeholder
        vote.createdBy = "Devyn Coyer";
        votes.add(vote)
        .then(docRef => {
            dispatch(addVoteSuccess({id:docRef.id, ...vote}));
        }).catch(err => {
            dispatch(addVoteFailed(err));
        });
    };
};

function fetchVotes() {
    return dispatch => {
        dispatch(fetchingVotes());

        votes.get({

        })
        .then(querySnapshot => {
            let votes = [];
             querySnapshot.forEach(doc => {
                let data = doc.data();
                votes.push(new Vote(doc.id, data.characterId, data.createdBy, data.createdOn));
            });
            dispatch(fetchVotesSuccess(votes));

        }).catch(err => {
            dispatch(fetchVotesFailed(err));
        });
    };
}


export {
    fetchVotes,
    addVote
}