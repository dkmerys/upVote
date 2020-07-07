import postUpvoteReducer from './post-upvote-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postList: postListReducer,
  handleUpvotePost: postUpvoteReducer
});

export default rootReducer;