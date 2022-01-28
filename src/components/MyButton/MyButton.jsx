import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ({ children }) => {
  return <button className={cl.btn}>{children}</button>;
};

export default MyButton;
