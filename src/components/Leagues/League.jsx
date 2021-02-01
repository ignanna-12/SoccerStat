import React from 'react';
import { NavLink } from 'react-router-dom';
import store from '../../redux/redux-store';
import s from './Leagues.module.scss';
import { setSelectedLeague } from '../../redux/leagues-calendar-reducer';
import unitedFlag from '../../images/all-poker-rooms.png';

let League = ({ competition, season, id, ensignUrl }) => {
  const handleChange = (e) => {
    store.dispatch(setSelectedLeague(e));
  };
  const arr = [2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];
  if (arr.includes(id)) {
    return (
      <NavLink
        className={s.league_row}
        to="/LeagueCalendar"
        onClick={(e) => {
          handleChange(id);
        }}
      >
        {competition}
        <img className={s.img} src={ensignUrl || unitedFlag}></img>
      </NavLink>
    );
  } else {
    return (
      <div className={s.blocks}>
        {competition}
        <img className={s.img} src={ensignUrl || unitedFlag}></img>
      </div>
    );
  }
};

export default League;
