import React from 'react';
import { NavLink } from 'react-router-dom';
import store from '../../redux/redux-store';
import s from './Leagues.module.scss';
import { setSelectedLeague } from '../../redux/user-setting-reducer';
import unitedFleg from '../../images/all-poker-rooms.png';

let League = ({ competition, season, id, ensignUrl }) => {
  const handleChange = (e) => {
    store.dispatch(setSelectedLeague(e));
  };
  // const isCompetitionAvailable = (x) => {
  //   let arr = [2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === x) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
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
        <img className={s.img} src={ensignUrl || unitedFleg}></img>
      </NavLink>
    );
  } else {
    return (
      <div className={s.blocks}>
        {competition}
        <img className={s.img} src={ensignUrl || unitedFleg}></img>
      </div>
    );
  }
};

export default League;
