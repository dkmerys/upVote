import React from 'react';
import Header from './Header';
import PostControl from './PostControl';

function App() {
  return (
    <React.Fragment>
      <div className='header'>
        <Header />
        </div>
      <PostControl />
    </React.Fragment>
  );
}

export default App;