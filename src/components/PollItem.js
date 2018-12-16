import React, { Component } from 'react';
import { Grid, Card, Avatar, CardHeader, IconButton, CardContent, CircularProgress, Typography } from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import Delete from '@material-ui/icons/Delete';
import Check from '@material-ui/icons/SendRounded';
import { cardStyles, fontStyles, cardHeaderTypographyStyles, avatarStyles, subHeaderTypographyStyles } from './styles/PollItem.css';

class PollItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            hovered: false,
            item: this.props.item,
            votePercentage: this.props.votePercentage,
            displayResults: this.props.displayResults
        }
    }

    setHover = (hovered) => {
        this.setState({ hovered });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item !== this.state.item) {
            this.setState({ item: nextProps.item });
        }

        if (nextProps.selected !== this.state.selected) {
            this.setState({ selected: nextProps.selected });
        }

        if(nextProps.displayResults !== this.state.displayResults) {
            this.setState({displayResults: nextProps.displayResults});
        }

        if(nextProps.votePercentage !== this.state.votePercentage) {
            this.setState({votePercentage: nextProps.votePercentage});
        }
    }


    render() {
        let { item, selected, hovered, displayResults} = this.state;

        let button = () => {
            if (selected) {
                return (
                    <IconButton onClick={e => {
                        e.stopPropagation();
                        this.props.onVote(item.id);
                    }} style={{color:'#fafafa'}} disabled={this.state.displayResults}>
                        <Check/>
                    </IconButton>

                );
            } else {
                return (
                    <IconButton onClick={e => {
                        e.stopPropagation();
                        this.props.onDelete(item.id);
                    }} disabled={this.state.votePercentage > 0}>
                        <Delete />
                    </IconButton>                   
                )
            }


        };

        let getResults = () => {
            if(!displayResults) 
            return null;
            return ( 
                <CardContent style={{color: selected ? '#fafafa' : '#0091EA'}}>
                    <Grid container direction="row" justify="center">
                        <Grid item>
                        <Typography variant="h6" color="inherit">
                            {`${this.state.votePercentage}%`}    
                        </Typography>
                            <CircularProgress value={this.state.votePercentage} variant="static" color="inherit"/>
                        </Grid>
                    </Grid>
                </CardContent>
            )
        }

        return (
            <Grid item xs={12} sm={6} md={4}>
                <Card raised={hovered || selected} style={cardStyles(selected)} onClick={() => this.props.onSelect(item.id)}
                    onMouseOver={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)}>
                    <CardHeader action={button()}
                        avatar={<Avatar style={avatarStyles(selected)}><Person /></Avatar>}
                        title={item.name} titleTypographyProps={cardHeaderTypographyStyles}
                        style={fontStyles(selected)} subheader={item.series} subheaderTypographyProps={subHeaderTypographyStyles}/>

                        {getResults()}
                </Card>
            </Grid>
        )
    }
}

export default PollItem;