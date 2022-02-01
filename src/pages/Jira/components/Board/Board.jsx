import React, { useEffect, useState } from 'react';
import cl from './Board.module.css';
import { useFetching } from '../../../../components/utils/myHooks/useFetching';
import Loader from '../../../../components/Loader/Loader';
import CardList from '../CardList/CardList';
import APIService from '../../../../components/utils/API/APIService';

const Board = () => {
  const [dataArray, setDataArray] = useState([]);
  const [userArray, setUserArray] = useState([]);
  let [todoArray, setTodoArray] = useState([]);
  let [processingArray, setProcessingArray] = useState([]);
  let [doneArray, setDoneArray] = useState([]);

  const [fetchData, isLoading, dataError] = useFetching(async () => {
    const response = await APIService.getAll(40, `todos`);
    const responseUser = await APIService.getAll(40, `users`);
    setUserArray(responseUser);
    setDataArray(response.map((item) => (item = { ...item, status: 'TODO' })));
  });

  useEffect(() => {
    fetchData();
  }, []);

  const arraysHandler = () => {
    setTodoArray(() => dataArray.filter((item) => item.status === 'TODO'));
    setProcessingArray(() =>
      dataArray.filter((item) => item.status === 'PROCESSING')
    );
    setDoneArray(() => dataArray.filter((item) => item.status == 'DONE'));
  };

  useEffect(() => {
    arraysHandler();
  }, [dataArray]);

  const changeStatus = (item) => {
    let i = -1;
    dataArray.map((dataItem, index) => {
      if (dataItem.id === item.id) i = index;
    });

    if (i >= 0) {
      if (dataArray[i].status == 'TODO') {
        setDataArray((prev) => {
          prev[i].status = 'PROCESSING';
          return [...prev];
        });
      } else if (dataArray[i].status == 'PROCESSING') {
        setDataArray((prev) => {
          prev[i].status = 'DONE';
          return [...prev];
        });
      }
    }
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
          array={todoArray}
          title="Todo"
          onClick={changeStatus}
          userArr={userArray}
        />
        <CardList
          array={processingArray}
          title="Processing"
          onClick={changeStatus}
          userArr={userArray}
        />
        <CardList
          array={doneArray}
          title="Done"
          onClick={changeStatus}
          userArr={userArray}
        />
      </div>
    </>
  );
};

export default Board;
