import React from 'react';

const InfoBlock = (props) => {
  return (
    <div className="bio__info">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

export default InfoBlock;
