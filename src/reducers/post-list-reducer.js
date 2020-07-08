import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { userName, message, id, upVote, downVote, timeStamp} = action;
  switch (action.type) { 
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          userName: userName,
          message: message,
          id: id,
          upVote: 0,
          downVote: 0,
          timeStamp: Date(document.data)
        }
      });
    case  c.DELETE_POST:
      const newState = { ...state };
      delete newState[id];
      return newState;
    
    case c.UPVOTE_POST:
      return Object.assign({}, state, {
        [id]: {
          id: id,
          userName: userName,
          message: message,
          upVote: upVote + 1,
          downVote: downVote
        }
      });
    case c.DOWNVOTE_POST:
      return Object.assign({}, state, {
        [id]: {
          id: id,
          userName: userName,
          message: message,
          upVote: upVote,
          downVote: downVote - 1
          }
        });
        default:
          return state
      }
  };
