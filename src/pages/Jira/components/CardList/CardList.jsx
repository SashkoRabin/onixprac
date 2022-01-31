import React from 'react';
import cl from '../Board/Board.module.css';
import PropTypes from 'prop-types';
import { object } from 'prop-types';
import Card from '../Card/Card';

const CardList = ({ array, title, onClick }) => {
  return (
    <div className={cl.board__col}>
      <h1 className={cl.col__title}>
        {title}: {array.length}
      </h1>
      {array.map((item) => (
        <Card key={item.id} click={onClick} item={item} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  array: PropTypes.arrayOf(object).isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardList;
