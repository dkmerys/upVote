import postVoteReducer from '../../reducers/post-vote-reducer';

let action;
const postData = {
  userName: 'Shaq',
  message: 'Yo!',
  upVote: 0,
  downVote: 0,
  id: 1
};

describe('postVoteReducer', () => {
  
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
    expect(postVoteReducer({}, action)).toEqual({
      [id] : {
        userName: userName,
        message: message,
        upVote: 1,
        downVote: downVote,
        id: id
      }
    });
  });
  test('Should successfully decrement a post downVote by 1', () => { 
    const { id, userName, message, upVote, downVote } = postData;
    action = {
      type: 'DOWNVOTE_POST',
      userName: userName,
      message: message,
      upVote: upVote,
      downVote: downVote,
      id: id,
    };
    expect(postVoteReducer({}, action)).toEqual({
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
