import postListReducer from '../../reducers/post-list-reducer';
import * as c from '../../actions/ActionTypes'


describe('postListReducer', () => {

  let action;
  const currentState = {
    1:{
      userName: 'Shaquille Oatmeal',
      message: 'Oh man, it is only Wednesday?',
      id: 1 },
    2:{
      userName: 'Charvarious Ward',
      message: 'Yep. Wednesday.',
      id: 2 }
    }

    const postData = {
      userName: 'Shaquille Oatmeal',
      message: 'We all make mistakes.',
      upVote: 3,
      downVote: 0,
      id: 1
    };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add a new post to PostList', () => { 
    const { userName, message, id, upVote, downVote, timeStamp } = postData;
    action = {
      type: c.ADD_POST,
      userName: userName,
      message: message,
      id: id,
      upVote: upVote,
      downVote: downVote,
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        userName: userName,
        message: message,
        id: id,
        upVote: 0,
        downVote: 0,
        timeStamp: Date(document.data)
      }
    });
  });
  test('Should successfully delete a post', () => {
    action = {
      type: c.DELETE_POST,
      id: 1 
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        userName: 'Charvarious Ward',
        message: 'Yep. Wednesday.',
        id: 2 
      }
    });
  });
  test('Should successfully increment a post upVote by 1', () => { 
    const { id, userName, message, upVote, downVote } = postData;
    action = {
      type: c.UPVOTE_POST,
      userName: userName,
      message: message,
      upVote: upVote,
      downVote: downVote,
      id: id,
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        userName: userName,
        message: message,
        upVote: 4,
        downVote: downVote,
        id: id
      }
    });
  });
  test('Should successfully decrement a post downVote by 1', () => { 
    const { id, userName, message, upVote, downVote } = postData;
    action = {
      type: c.DOWNVOTE_POST,
      userName: userName,
      message: message,
      upVote: upVote,
      downVote: downVote,
      id: id,
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        userName: userName,
        message: message,
        upVote: upVote,
        downVote: -1,
        id: id
      }
    });
  });
});