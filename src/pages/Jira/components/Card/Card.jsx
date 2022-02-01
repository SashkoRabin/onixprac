import React from 'react';
import cl from '../Board/Board.module.css';
import PropTypes from 'prop-types';
import { stringToColor } from '../../../../components/utils/Users/avatarUser';

const Card = ({ item, click, user }) => {
  const us = user.filter((it) => it.id === item.userId);
  const userName = us[0].name;
  let letter = userName.substring(0, 1);
  let backgroundColor = stringToColor(userName);

  console.log(backgroundColor);
  console.log(letter);
  return (
    <div className={cl.board__card} onClick={() => click(item)}>
      <p>{item.title}</p>
      <br />
      <h3>Status: {item.status}</h3>
      <a>
        <h5>{userName}</h5>
        <div
          className={cl.user__avatar}
          style={{ backgroundColor: `#${backgroundColor}` }}
        >
          {letter}
        </div>
      </a>
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
  user: PropTypes.array.isRequired,
};

export default Card;
