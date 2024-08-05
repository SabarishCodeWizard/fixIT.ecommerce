import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from '../authSlice';


export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <div>
      <div>
        
      </div>
    </div>
  );
}
