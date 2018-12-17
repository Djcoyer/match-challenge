import React, { Fragment, Component } from 'react';
import PollItem from './PollItem';
import { Grid, Card, CardHeader, CardContent, TextField, CardActions, Button, IconButton, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharacters, addCharacter, deleteCharacter } from '../api/CharacterApi';
import { addVote, fetchVotes } from '../api/VoteApi';
import SaveIcon from '@material-ui/icons/SendRounded';
import { cardStyles, cardHeaderStyles, cardHeaderTypographyStyles, cardContentStyles, cardActionStyles } from './styles/Poll.css';

class Poll extends Component {

    constructor(props) {
        super(props);


        this.state = {
            selectedOption: '',
            name: '',
            series: '',
            imgSrc: '',
            characters: this.props.characters,
            votes: this.props.votes,
            isLoading: this.props.isLoading,
            addingCharacter: this.props.addingCharacter,
            voteMap: new Map(),
            voteSubmitted: this.props.voteSubmitted,
            characterError: {}
        }
    }

    componentWillMount() {
        this.props.fetchCharacters();
        this.props.fetchVotes();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.characters !== this.state.characters) {
            this.setState({ characters: nextProps.characters });
        }

        if (nextProps.isLoading !== this.state.isLoading) {
            this.setState({ isLoading: nextProps.isLoading });
        }

        if (nextProps.addingCharacter !== this.state.addingCharacter) {
            this.setState({ addingCharacter: nextProps.addingCharacter });
        }

        if (nextProps.votes != this.state.votes || nextProps.votes.length != this.state.votes.length) {
            this.setState({ votes: nextProps.votes });
        }

        if (nextProps.voteSubmitted !== this.state.voteSubmitted) {
            this.setState({ voteSubmitted: nextProps.voteSubmitted });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.votes !== this.state.votes || prevState.votes.length !== this.state.votes.length) {
            let { votes, characters } = this.state;
            let voteMap = new Map();
            characters.forEach(c => {
                let percentage = 0;
                let characterVotes = votes.filter(v => v.characterId === c.id);
                if (characterVotes) {
                    percentage = ((characterVotes.length / votes.length) * 100).toFixed(2);
                }
                voteMap.set(c.id, percentage);
            });

            this.setState({ voteMap });
        }
    }

    getCharacterOptions = () => {
        let { characters, voteMap, votes } = this.state;
        return characters.map(c => {
            let votePercentage = voteMap.get(c.id);
            return <PollItem item={c} selected={false} onSelect={this.onSelect}
                selected={c.id === this.state.selectedOption}
                onVote={this.onVote} onDelete={this.onDelete}
                votePercentage={votePercentage} displayResults={this.state.voteSubmitted} />
        });
    };

    onChange = e => {
        let { id, value } = e.target;
        this.setState({ [id]: value });

    };

    onSelect = (id) => {
        if (!this.state.voteSubmitted) {
            if (this.state.selectedOption === id)
                id = '';
            this.setState({ selectedOption: id });
        }
    }

    addCharacter = () => {
        let { name, series, imgSrc } = this.state;
        let characterError = {};
        if(!name) {
            characterError = {...characterError, name};
        }
        if(!series) {
            characterError = {...characterError, series};
        }
        if(!imgSrc) {
            characterError = {...characterError, imgSrc};
        }
        
        if(Object.keys(characterError).length === 0) {
            this.props.addCharacter({ name, series, imgSrc});
        this.setState({ name: '', series: '', imgSrc:'', characterError: {}});
        } else this.setState({characterError});

        
    };

    onVote = (characterId) => {
        this.props.addVote({ characterId })
    }

    onDelete = (id) => {
        if(!this.state.voteSubmitted) {
            this.props.deleteCharacter(id);
            let characters = this.state.characters;
            characters = characters.filter(c => c.id !== id);
            this.setState({ characters });
        }
    }

    getCharacterCreationCard = () => {
        let error = this.state.characterError;

        if(!this.state.voteSubmitted) {
            return (
                <Grid item xs={12} sm={6} md={4}>
                        <Card style={cardStyles}>
                            <CardHeader title={"New Character"} titleTypographyProps={cardHeaderTypographyStyles}
                                style={cardHeaderStyles} />
                            {this.state.addingCharacter ?
                                <CircularProgress /> :
                                <Fragment>

                                    <CardContent style={cardContentStyles}>
                                        <Grid container spacing={16}>
                                            <Grid item xs={12}>
                                                <TextField required error={error.name != null} label="Name" id="name" value={this.state.name} onChange={e => this.onChange(e)} margin="none" fullWidth={true} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField required error={error.series != null} label="Series" id="series" value={this.state.series} onChange={e => this.onChange(e)} fullWidth={true} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField required error={error.imgSrc != null} label="Image URL" id="imgSrc" value={this.state.imgSrc} onChange={e => this.onChange(e)} fullWidth={true} />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions style={cardActionStyles}>
                                        <IconButton color="inherit" onClick={this.addCharacter}>
                                            <SaveIcon />
                                        </IconButton>
                                    </CardActions>
                                </Fragment>
                            }
                        </Card>
                    </Grid>
            )
        } else return null;
    }

    render() {

        return (

            this.state.isLoading ?
                <Grid container direction="row" justify="center">
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                </Grid> :

                <Fragment>
                    {this.getCharacterOptions()}
                    {this.getCharacterCreationCard()}
                </Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters.characters,
        err: state.characters.err,
        isLoading: state.characters.isLoading,
        addingCharacter: state.characters.addingCharacter,
        votes: state.votes.votes,
        voteSubmitted: state.votes.voteSubmitted
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchCharacters,
        addCharacter,
        deleteCharacter,
        addVote,
        fetchVotes
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);