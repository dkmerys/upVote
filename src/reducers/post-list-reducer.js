export default (state = {}, action) => {
  const { userName, message, id } = action;
  switch (action.type) { 
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          userName: userName,
          message: message,
          id: id,
          upVote: 0,
          downVote: 0
        }
      });
    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state
  }
};