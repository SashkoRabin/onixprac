import React from 'react';
import PropTypes from 'prop-types';
import cl from './MyButton.module.css';

const MyButton = ({ children }) => {
  return <button className={cl.btn}>{children}</button>;
};

MyButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MyButton;
