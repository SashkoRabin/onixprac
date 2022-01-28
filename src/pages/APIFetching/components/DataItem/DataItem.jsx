import React from 'react';
import cl from './DataItem.module.css';
import PropTypes from 'prop-types';

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

DataItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default DataItem;
