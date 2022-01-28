import React from 'react';
import cl from './DataItem.module.css';

const DataItem = ({ data }) => {
  return (
    <div className={cl.data}>
      <div className={cl.data__content}>
        <strong>
          {data.id}. {data.title}
        </strong>
        <div>{data.body}</div>
      </div>
    </div>
  );
};

export default DataItem;
