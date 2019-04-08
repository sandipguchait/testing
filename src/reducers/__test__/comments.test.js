import commentsReducer  from '../commentreducer';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: 'SAVE_COMMENT',
        payload: 'New Comment'
    };
    const newState = commentsReducer( [], action );

    expect(newState).toEqual(['New Comment']);
})