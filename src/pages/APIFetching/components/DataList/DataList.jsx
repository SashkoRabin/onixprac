import React from 'react';
import DataItem from '../DataItem/DataItem';
import cl from './DataList.module.css';
import PropTypes from 'prop-types';

const DataList = ({ dataArray }) => {
  if (!dataArray.length) {
    return <h1 className={cl.aboutData}>Пока что данных нет</h1>;
  }
  return (
    <div>
      <h1 className={cl.aboutData}>Загруженные данные</h1>
      {dataArray.map((data) => (
        <DataItem data={data} key={data.id} />
      ))}
    </div>
  );
};

DataList.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

export default DataList;
