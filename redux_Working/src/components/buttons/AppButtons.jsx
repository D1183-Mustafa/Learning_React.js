import React from 'react'
import { useDispatch } from 'react-redux';
import { artir, azalt, reset } from '../../redux/actions/actions';

function AppButtons() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick = {() => dispatch(artir())}>Artır</button>
      <button onClick = {() => dispatch(azalt())}>Azalt</button>
      <button onClick = {() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default AppButtons
