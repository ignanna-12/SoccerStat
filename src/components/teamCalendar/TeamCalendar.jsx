import React from 'react';
import s from './TeamsCalendar.module.scss';
import Match from './Match';
import PropTypes from 'prop-types';

const TeamCalendar = ({ name, matches }) => {
  return (
    <div className={s.block}>
      <h1 className={s.h1}>Календарь {name ? name : 'Arsenal FC'}</h1>
      {matches.map((m) => (
        <Match homeTeam={m.homeTeam.name} awayTeam={m.awayTeam.name} date={m.utcDate} key={m.id} />
      ))}
    </div>
  );
};

TeamCalendar.propTypes = {
  name: PropTypes.string,
  matches: PropTypes.object,
};

export default TeamCalendar;
