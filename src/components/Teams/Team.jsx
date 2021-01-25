import React from 'react';
import s from './Teams.module.scss';

let Team = ({ team, count }) => {
  return (
    <div>
      <span>
        <div>{team}</div>
      </span>
    </div>
  );
};

export default Team;
