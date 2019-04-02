import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
     const div = document.createElement('div');
     ReactDOM.render(<App/>, div );
     //Looks inside the div
     //and check if it contains commentBox
     expect(div.innerHTML).toContain('CommentBox')
     ReactDOM.unmountComponentAtNode(div);

})