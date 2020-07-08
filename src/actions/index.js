export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const addPost = (post) => {
  const { userName, message, upVote, downVote, id, timeStamp } = post;
  return {
    type: 'ADD_POST',
    userName: userName,
    message: message,
    upVote: upVote,
    downVote: downVote,
    id: id,
    timeStamp: timeStamp
  }
}

export const upvotePost = (post) => {
  const { userName, message, upVote, downVote, id, timeStamp } = post;
  return {
    type: 'UPVOTE_POST',
    userName: userName,
    message: message,
    upVote: upVote,
    downVote: downVote,
    id: id,
    timeStamp: timeStamp
  }
}

export const downvotePost = (post) => { 
  const { userName, message, upVote, downVote, id, timeStamp } = post;
  return {
    type: 'DOWNVOTE_POST',
    userName: userName,
    message: message,
    upVote: upVote,
    downVote: downVote,
    id: id, 
    timeStamp: timeStamp
  }
}