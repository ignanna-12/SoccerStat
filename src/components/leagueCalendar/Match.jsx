import React from 'react';
import s from './LeaguesCalendar.module.scss';

let Match = ({ homeTeam, awayTeam, date }) => {
  return (
    <div>
      <span>
        <div>
          {homeTeam} - {awayTeam} : {date}
        </div>
      </span>
    </div>
  );
};

export default Match;
