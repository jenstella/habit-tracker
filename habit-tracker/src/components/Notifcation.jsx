import React from 'react';
import Habit from './Habit';

// pass props from habit tracker to this, and build the notification using props
// also pass props to home screen to show
// IF props === true in notifcation show task notification ELSE have "no tasks today"

export default function Notifcation(props) {
  return (
     <div>{props.count}</div>
  )
}
