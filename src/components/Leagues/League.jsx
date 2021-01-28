import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Leagues.module.scss';

let League = ({ competition, season }) => {
  return (
    <div>
      <NavLink to="/LeagueCalendar">
        <div>{competition}</div>
      </NavLink>
    </div>
  );
};

export default League;
