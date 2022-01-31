import React from 'react';
import cl from '../Board/Board.module.css';
import PropTypes from 'prop-types';

const Card = ({ item, click }) => {
  return (
    <div className={cl.board__card} onClick={() => click(item)}>
      <p>{item.title}</p>
      <h2>Id: {item.id}</h2>
      <h3>Status: {item.status}</h3>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
  }),
  click: PropTypes.func.isRequired,
};

export default Card;
