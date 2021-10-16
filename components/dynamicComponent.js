import React from 'react';
import Student from './student';
import Worker from './worker';

const DynamicComponet = ({ type }) => {
  if (type === 'worker') {
    return <Worker />;
  }
  return <Student />;
};

export default DynamicComponet;
