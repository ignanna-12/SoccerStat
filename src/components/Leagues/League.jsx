import React from 'react';
import s from './Leagues.module.scss';

let League = ({ competition, count, season }) => {
  return (
    <div>
      <span>
        <div>
          {competition}
          {season}
        </div>
      </span>
    </div>
  );
};

export default League;
