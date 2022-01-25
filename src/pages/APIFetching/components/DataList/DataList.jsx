import React from 'react';
import DataItem from '../DataItem/DataItem';

const DataList = ({ dataArray }) => {
  if (!dataArray.length) {
    return <h1 style={{ textAlign: 'center' }}>Пока что данных нет</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Загруженные данные</h1>
      {dataArray.map((data) => (
        <DataItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default DataList;
