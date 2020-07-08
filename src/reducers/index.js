import postVoteReducer from './post-vote-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postList: postListReducer,
  handleUpvotePost: postVoteReducer,
  handleDownvotePost: postVoteReducer
});

export default rootReducer;