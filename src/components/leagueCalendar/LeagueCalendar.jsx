import React from 'react';
import s from './LeaguesCalendar.module.scss';
import Match from './Match';

const LeagueCalendar = ({ name, matches }) => {
  return (
    <div className={s.block}>
      {name}
      {matches.map((m) => (
        <Match homeTeam={m.homeTeam.name} awayTeam={m.awayTeam.name} date={m.utcDate} key={m.id} />
      ))}
    </div>
  );
};

export default LeagueCalendar;
