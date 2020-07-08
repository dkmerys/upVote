export default (state = {}, action) => {
  const { id, userName, message, upVote, downVote } = action;
  switch (action.type) { 
    case 'UPVOTE_POST':
      return Object.assign({}, state, {
        [id]: {
          id: id,
          userName: userName,
          message: message,
          upVote: upVote + 1,
          downVote: downVote
        }
      });
    case 'DOWNVOTE_POST':
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