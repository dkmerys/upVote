import React from 'react';

const initialState = {
  postList: {
    0: {
      userName: 'Pwnin Obrien',
      message: 'Every time I try to eat healthy...along comes Christmas, Summer, Friday, or Tuesday and absolutely ruins it for me.',
      upVote: 10,
      downVote: 6,
      timeStamp: Date(document.data),
      id: '0'
    },
    1: {
      userName: 'pwr2dapeephole',
      message: 'Today feels a lot more Tequila Tuesday than Taco Tuesday',
      upVote: 3,
      downVote: 17,
      timeStamp: Date(document.data),
      id: '1'
    },
    2: {
      userName: 'king_of_dairy_queen',
      message: 'Some days I amaze myself. Other days, I look for my glasses while still wearing them.',
      upVote: 73,
      downVote: 24,
      timeStamp: Date(document.data),
      id: '2'
    },
    3: {
      userName: 'Shaquille Oatmeal',
      message: 'If cauliflower can somehow become pizza, you my friend can do anything.',
      upVote: 118,
      downVote: 1,
      timeStamp: Date(document.data),
      id: '3'
    }
  }
}

export default initialState;