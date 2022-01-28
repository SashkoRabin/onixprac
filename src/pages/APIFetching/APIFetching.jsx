import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import DataList from './components/DataList/DataList';
import Loader from '../../components/Loader/Loaderader';
import axios from 'axios';
import { useFetching } from './useFetching';
import { useState } from 'react';
import cl from '../../components/MyButton/MyButton.module.css';
import '../../App.css';
import AnotherNavBar from '../../components/AnotherNavBar/AnotherNavBar';

const APIFetching = () => {
  const [dataArray, setDataArray] = useState([]);

  const getAll = async () => {
    const responce = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return responce;
  };

  const [fetchData, isLoading, dataError] = useFetching(async () => {
    const response = await getAll();
    setDataArray([...dataArray, ...response.data]);
  });

  return (
    <div className="fetch">
      <NavBar />
      <AnotherNavBar />
      <button className={cl.btn} onClick={fetchData}>
        Загрузить данные
      </button>
      {dataError && <h1>Произошла ошибка {dataError}</h1>}
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : (
        <DataList dataArray={dataArray} />
      )}
    </div>
  );
};

export default APIFetching;
