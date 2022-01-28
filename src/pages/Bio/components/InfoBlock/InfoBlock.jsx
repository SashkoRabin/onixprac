import React from 'react';
import PropTypes from 'prop-types';

const InfoBlock = ({ title, body }) => {
  return (
    <div className="bio__info">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default InfoBlock;
