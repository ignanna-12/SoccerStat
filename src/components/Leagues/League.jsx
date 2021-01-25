import React from 'react';
import s from './Leagues.module.scss';

let League = ({ league, count }) => {
  return (
    <div>
      <span>
        <div>{league}</div>
      </span>
    </div>
  );
};

export default League;
