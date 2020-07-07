import postUpvoteReducer from '../../reducers/post-upvote-reducer';

let action;
const postData = {
  userName: 'Shaq',
  message: 'Yo!',
  upVote: 0,
  downVote: 0,
  id: 1
};

describe('postUpvoteReducer', () => {
  
  test('Should successfully increment a post upVote by 1', () => { 
    const { id, userName, message, upVote, downVote } = postData;
    action = {
      type: 'UPVOTE_POST',
      userName: userName,
      message: message,
      upVote: upVote,
      downVote: downVote,
      id: id,
    };
    expect(postUpvoteReducer({}, action)).toEqual({
      [id] : {
        userName: userName,
        message: message,
        upVote: 1,
        downVote: downVote,
        id: id
      }
    });
  });
});
