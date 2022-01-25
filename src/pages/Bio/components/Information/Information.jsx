import React from 'react';
import InfoBlock from '../InfoBlock/InfoBlock';

const Information = () => {
  return (
    <div className="bio__wrapper">
      <InfoBlock
        title={'Личная информация'}
        body={
          'Родился 5 января 2003 года. После школы поступил в политехнический колледж, где получал образование инженера программного обеспечения'
        }
      />
      <InfoBlock
        title={'Всякая всячина...'}
        body={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti facere consectetur accusamus minus eos! Quisquam ad nisi numquam ut harum molestiae, dolorem tempora, sequi perspiciatis debitis optio praesentium quis'
        }
      />
      <InfoBlock title={'Стаж работы'} body={'Отсутствует'} />{' '}
      <InfoBlock
        title={'Ещё информация...'}
        body={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti facere consectetur accusamus minus eos! Quisquam ad nisi numquam ut harum molestiae, dolorem tempora, sequi perspiciatis debitis optio praesentium quis. Cum incidunt veniam accusantium facilis laudantium.'
        }
      />
    </div>
  );
};

export default Information;
