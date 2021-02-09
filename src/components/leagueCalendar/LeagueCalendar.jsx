import React from 'react';
import s from './LeaguesCalendar.module.scss';
import TableRow from '../../common/TableRow';
import PropTypes from 'prop-types';

const LeagueCalendar = ({ name, matches }) => {
  return (
    <div className={s.block}>
      <h1 className={s.h1}>Календарь {name}</h1>
      {matches.map((m, i) => (
        <TableRow
          striped={!(i % 2)}
          homeTeam={m.homeTeam.name}
          awayTeam={m.awayTeam.name}
          date={m.utcDate}
          key={m.id}
        />
      ))}
    </div>
  );
};

LeagueCalendar.propTypes = {
  name: PropTypes.string,
  matches: PropTypes.object,
};

export default LeagueCalendar;
