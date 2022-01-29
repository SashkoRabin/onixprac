/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import DataList from './components/DataList/DataList';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import { useFetching } from '../../components/utils/myHooks/useFetching';
import buttonCl from '../../components/MyButton/MyButton.module.css';
import '../../App.css';
import AnotherNavBar from '../../components/AnotherNavBar/AnotherNavBar';
import pageCl from './APIFetching.module.css';
import { useObserver } from '../../components/utils/observer/Observer';
import { getPageCount } from '../../components/utils/datapages/datapages';
import MyButton from '../../components/MyButton/MyButton';

const APIFetching = () => {
  const [dataArray, setDataArray] = useState([]);
  const [totalPages, setTotalPages] = useState(10);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [clicked, setClicked] = useState(false);
  const lastElement = useRef();

  const getAll = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  };

  const [fetchData, isLoading, dataError] = useFetching(async () => {
    const response = await getAll();
    setDataArray([...dataArray, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page <= totalPages, clicked, isLoading, () => {
    setPage(page + 1);
    fetchData();
  });

  const renderData = () => {
    setClicked(true);
  };
  return (
    <div className="fetch">
      <NavBar />
      <AnotherNavBar />
      <button className={buttonCl.btn} onClick={renderData}>
        Загрузить данные
      </button>

      {dataError && <h1>Произошла ошибка {dataError}</h1>}
      <DataList dataArray={dataArray} />
      {isLoading && (
        <div className={pageCl.loaderWrapper}>
          <Loader />
        </div>
      )}
      <div ref={lastElement} className={pageCl.data__footer}></div>
    </div>
  );
};

export default APIFetching;
