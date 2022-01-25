import React from 'react';
import cl from './DataItem.module.css';

const DataItem = (props) => {
  return (
    <div className={cl.data}>
      <div className={cl.data__content}>
        <strong>
          {props.data.id}. {props.data.title}
        </strong>
        <div>{props.data.body}</div>
      </div>
    </div>
  );
};

export default DataItem;
