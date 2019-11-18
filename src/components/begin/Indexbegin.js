import React from 'react';
import Comment from './Comment';

import Comp from './Comp';
import Clock from './Clock';

import Popper from './Popper';

import List from './List';


import Calculator from '../boil/Calculator';



function Begin() {

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  return (
    <div className="App">
          <div className="dn2">
            <Clock />
           </div>

          <div className="">
            <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author} />
           </div>
        
          
            <List />

           

            <Calculator />
          




    </div>
  );
}

export default Begin;