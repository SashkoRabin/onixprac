import React from 'react';
import InfoBlock from '../InfoBlock/InfoBlock';

const Information = () => {
  const infoArray = [
    {
      id: 1,
      title: 'Личная информация',
      body: 'Родился 5 января 2003 года. После школы поступил в политехнический колледж, где получал образование инженера программного обеспечения',
    },
    {
      id: 2,
      title: 'Всякая всячина...',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti facere consectetur accusamus minus eos! Quisquam ad nisi numquam ut harum molestiae, dolorem tempora, sequi perspiciatis debitis optio praesentium quis',
    },
    { id: 3, title: 'Стаж работы', body: 'Отсутствует' },
    {
      id: 4,
      title: 'Ещё информация...',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti facere consectetur accusamus minus eos! Quisquam ad nisi numquam ut harum molestiae, dolorem tempora, sequi perspiciatis debitis optio praesentium quis. Cum incidunt veniam accusantium facilis laudantium.',
    },
  ];
  return (
    <div className="bio__wrapper">
      {infoArray.map((info) => (
        <InfoBlock title={info.title} body={info.body} key={info.id} />
      ))}
    </div>
  );
};

export default Information;
