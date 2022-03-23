/* eslint-disable linebreak-style */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */

import React from 'react';

export const transfer = (arr) => {
  if (arr.stops.length === 0) {
    return <span> Без пересадок </span>;
  }
  if (arr.stops.length > 0) {
    return (
      <span>
        {' '}
        Количество пересадок :
        {arr.stops.length}
      </span>
    );
  }
};

export function NumberTransfers(arr) {
  if (arr.length === 0) return;
  if (arr.length > 0) {
    let kek = '';
    arr.map((item) => kek += ` ${item}`);
    return (
      <span className="transfers">
        {' '}
        {kek}
        {' '}
      </span>
    );
  }
}

export const dateConvert = (date) => {
  if (date.length === 1) {
    return `0${date}`;
  } return date;
};
