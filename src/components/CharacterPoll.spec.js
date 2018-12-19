import CharacterPoll from './CharacterPoll';
import ShallowRenderer from 'react-test-renderer/shallow';
import React, { Fragment } from 'react';
import { AppBar } from '@material-ui/core';

describe("Character Poll", () => {
    const renderer = new ShallowRenderer();
    
    it("Renders correct number of children", () =>{ 
        renderer.render(<CharacterPoll/>);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe(Fragment);
        expect(result.props.children).toHaveLength(3);
    });
});