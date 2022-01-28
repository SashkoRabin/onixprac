import React from 'react';
import cl from './MyButton.module.css';
import PropTypes from 'prop-types';

const MyButton = ({ children }) => {
  return <button className={cl.btn}>{children}</button>;
};

MyButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MyButton;
