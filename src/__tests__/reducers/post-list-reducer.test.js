import postListReducer from '../../reducers/post-list-reducer';



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
      id: 1
    };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add a new post to PostList', () => { 
    const { userName, message, id, upVote, downVote } = postData;
    action = {
      type: 'ADD_POST',
      userName: userName,
      message: message,
      id: id,
      upVote: upVote,
      downVote: downVote
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        userName: userName,
        message: message,
        id: id,
        upVote: 0,
        downVote: 0
      }
    });
  });
  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
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
});