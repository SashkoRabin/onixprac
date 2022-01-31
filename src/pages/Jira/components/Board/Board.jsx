import React, { useEffect, useRef, useState } from 'react';
import cl from './Board.module.css';
import axios from 'axios';
import { useFetching } from '../../../../components/utils/myHooks/useFetching';
import Loader from '../../../../components/Loader/Loader';
import CardList from '../CardList/CardList';

const Board = () => {
  const [dataArray, setDataArray] = useState([]);
  let todoArray = useRef([]);
  let processingArray = useRef([]);
  let doneArray = useRef([]);

  const getAll = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
      {
        params: {
          _limit: 40,
        },
      }
    );
    return response;
  };

  const [fetchData, isLoading, dataError] = useFetching(async () => {
    const response = await getAll();
    setDataArray(
      response.data.map((item) => (item = { ...item, status: 'TODO' }))
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  const todoHandler = () => {
    todoArray.current = dataArray.filter((item) => item.status == 'TODO');
    console.log(todoArray.current);
  };
  const processingHandler = () => {
    processingArray.current = dataArray.filter(
      (item) => item.status === 'PROCESSING'
    );
  };
  const doneHandler = () => {
    doneArray.current = dataArray.filter((item) => item.status == 'DONE');
  };

  useEffect(() => {
    todoHandler();
    processingHandler();
    doneHandler();
  }, [dataArray]);

  const changeStatus = (item) => {
    if (item.status == 'TODO') {
      item.status = 'PROCESSING';
    } else if (item.status == 'PROCESSING') {
      item.status = 'DONE';
    }

    setDataArray((prev) =>
      prev.map((i) => {
        if (i.id === item.id) i = item;
      })
    );

    console.log(dataArray);
  };

  if (isLoading)
    return (
      <div className={cl.loaderWrapper}>
        <Loader />
      </div>
    );
  return (
    <>
      <h1 className={cl.board__title}>Board</h1>

      <div className={cl.board__container}>
        {dataError && <h1>Произошла ошибка...</h1>}
        <CardList
          array={todoArray.current}
          title="Todo"
          onClick={changeStatus}
        />
        <CardList
          array={processingArray.current}
          title="Processing"
          onClick={changeStatus}
        />
        <CardList
          array={doneArray.current}
          title="Done"
          onClick={changeStatus}
        />
      </div>
    </>
  );
};

export default Board;
