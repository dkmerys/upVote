import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import postUpvoteReducer from '../../reducers/post-upvote-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      postList: {},
      handleUpvotePost: {}
    });
  });
  
  test('Check that initial state of postListReducer matches root reducer', () => {
    expect(store.getState().postList).toEqual(postListReducer(undefined, { type: null }));
  });

  test('Check that initial state of postUpvoteReducer matches root reducer', () => {
    expect(store.getState().handleUpvotePost).toEqual(postUpvoteReducer(undefined, { type: null }));
  });

  test()
});
