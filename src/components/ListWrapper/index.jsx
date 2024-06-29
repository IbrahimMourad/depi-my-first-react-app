import React from 'react';
import CardItem from './CardItem';

const ListWrapper = () => {
  const items = [
    {
      id: '1',
      text: 'item 1',
      icon: 'X',
    },
    {
      id: '2',
      text: 'item 2',
      icon: 'X',
    },
    {
      id: '3',
      text: 'item 3',
      icon: 'X',
    },
    {
      id: '4',
      text: 'item 4',
      icon: 'X',
    },
    {
      id: '5',
      text: 'item 4151',
      icon: 'X',
    },
  ];
  return (
    <ul className='list'>
      {items.map((el, idx) => {
        return (
          <div key={el.id}>
            <span>{idx + 1}</span>
            <CardItem item={el} />
          </div>
        );
      })}
    </ul>
  );
};

export default ListWrapper;
