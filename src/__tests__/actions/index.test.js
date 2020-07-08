import * as actions from './../../actions';

describe('post list actions', () => { 
  it('deletePost should create DELETE_POST action', () => { 
    expect(actions.deletePost(1)).toEqual({
      type: 'DELETE_POST',
      id: 1
    });
  });
  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({userName: 'Dave', message: 'Yo!', id: 1, upVote: 0, downVote: 0})).toEqual({
      type: 'ADD_POST',
      userName: 'Dave',
      message: 'Yo!',
      upVote: 0,
      downVote: 0,
      id: 1
    });
  });
  it('upvotePost should create UPVOTE_POST action', () => {
    expect(actions.upvotePost({userName: 'Dave', message: 'Yo!', id: 1, upVote: 0, downVote: 0})).toEqual({
      type: 'UPVOTE_POST',
      userName: 'Dave',
      message: 'Yo!',
      upVote: 1,
      downVote: 0,
      id: 1
    });
  });

  it('downvotePost should create DOWNVOTE_POST action', () => {
    expect(actions.downvotePost({userName: 'Dave', message: 'Yo!', id: 1, upVote: 1, downVote: 2})).toEqual({
      type: 'DOWNVOTE_POST',
      userName: 'Dave',
      message: 'Yo!',
      upVote: 1,
      downVote: 1,
      id: 1
    });
  });


});