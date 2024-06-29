import React from 'react';

export default function CardItem({ item }) {
  return (
    <li>
      {item.text} {item.icon}
    </li>
  );
}
