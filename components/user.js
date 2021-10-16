import React from 'react';

const User = ({ user }) => {
  const classes = user.completed ? 'completed' : 'notCompleted';
  return (
    <div className={classes}>
      <p>id: {user.id}</p>
      <p>user id: {user.userId}</p>
      <p>title: {user.title}</p>
      <p>completed: {user.completed}</p>
    </div>
  );
};

export default User;
