import PollItem from './PollItem';
import React from 'react';
import Renderer from 'react-test-renderer';
import { CardContent, IconButton, Card } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete'
import Check from '@material-ui/icons/SendRounded';
import Character from '../models/Character';

let characterId = "123456";
let name = "Obi-Wan Kenobi";
let series = "Star Wars";
let imgSrc = "someFakeUrl";


let character = new Character(characterId, name, series, imgSrc)

let selected = false;

let displayResults = false;

let votePercentage = 30;

let onVote = jest.fn(characterId => {

});

let onDelete = jest.fn(characterId => {

});

let stopPropagation = jest.fn(() => {});

describe("Poll Item", () => {
    beforeAll(() => {

    });

    beforeEach(() => {
        onVote.mockClear();
        onDelete.mockClear();
        stopPropagation.mockClear();
    });

    it("Outputs information correctly", () => {
        const component = Renderer.create(<PollItem item={character} onVote={onVote} onDelete={onDelete} selected={false}/>);
        const tree = component.root;
        expect(tree).not.toBe(null);
        expect(tree.findAllByType(CardContent)).toHaveLength(0);
        expect(tree.findByType(Delete)).not.toBeNull();
        expect(tree.findAllByType(Check)).toHaveLength(0);
        expect(tree.props.shouldDisplay).toBeFalsy();
        expect(tree.findByProps({title:name})).not.toBeFalsy();
        expect(tree.findAllByProps({raised:true})).toHaveLength(0);
    });
    
    
    it("Displays submit button and different styles when card is selected", () => {
        const component = Renderer.create(<PollItem item={character} onVote={onVote} onDelete={onDelete} displayResults={false} selected={true}/>);
        const tree = component.root;
        expect(tree).not.toBe(null);
        expect(tree.findAllByType(CardContent)).toHaveLength(0);
        expect(tree.findAllByType(Delete)).toHaveLength(0);
        expect(tree.findAllByType(Check)).toHaveLength(1);
        expect(tree.props.displayResults).toBeFalsy();
        expect(tree.findByProps({title:name})).not.toBeFalsy();
        expect(tree.findAllByProps({raised:true})).toBeTruthy();
    });


    it("Displays card content when vote has been submitted", () => {
        const component = Renderer.create(<PollItem item={character} onVote={onVote} onDelete={onDelete} displayResults={true} selected={false}/>);
        const tree = component.root;
        expect(tree).not.toBe(null);
        expect(tree.findAllByType(CardContent)).toHaveLength(1);
        expect(tree.findAllByType(Delete)).toHaveLength(0);
        expect(tree.findAllByType(Check)).toHaveLength(0);
        expect(tree.props.displayResults).toBeTruthy();
        expect(tree.findByProps({title:name})).not.toBeFalsy();
        expect(tree.findAllByProps({raised:true})).toHaveLength(0);
    });

    it("Submits vote successfully on click", () => {
        const component = Renderer.create(<PollItem item={character} onVote={onVote} onDelete={onDelete} displayResults={false} selected={true}/>);
        const tree = component.root;
        let button = tree.findByType(IconButton);
        let event = {stopPropagation};
        button.props.onClick(event)
        expect(onVote).toHaveBeenCalledTimes(1);
        expect(stopPropagation).toHaveBeenCalledTimes(1);
    });

    it("Deletes charcter on click of delete button", () => {
        const component = Renderer.create(<PollItem item={character} onVote={onVote} onDelete={onDelete} displayResults={false} selected={false}/>);
        const tree = component.root;
        let button = tree.findByType(IconButton);
        let event = {stopPropagation};
        button.props.onClick(event)
        expect(onDelete).toHaveBeenCalledTimes(1);
        expect(stopPropagation).toHaveBeenCalledTimes(1);
    });

    it("Sets hover when mouse over/mouse leave", () => {
        const component = Renderer.create(<PollItem item={character} onVote={onVote} onDelete={onDelete} displayResults={false} selected={false}/>);
        const tree = component.root;
        const card = tree.findByType(Card);
        card.props.onMouseOver();
        expect(tree.findAllByProps({raised:true})).toHaveLength(2);         

        card.props.onMouseLeave();
        expect(tree.findAllByProps({raised:true})).toHaveLength(0);
    });
});