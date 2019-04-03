import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', () => {
     const wrapped = shallow(<App/>);
     //writing the expect function for comment box to .toEqual mather
     expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment List', () => {
     const wrapped = shallow(<App/>);
     expect(wrapped.find(CommentList).length).toEqual(1)
});