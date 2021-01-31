import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Teams.module.scss';
import unitedFlag from '../../images/all-poker-rooms.png';
import store from '../../redux/redux-store';
import { setSelectedTeam } from '../../redux/user-setting-reducer';

let Team = ({ team, crestUrl, id }) => {
  const handleChange = (e) => {
    store.dispatch(setSelectedTeam(e));
  };
  return (
    <NavLink
      className={s.team_row}
      to="/TeamCalendar"
      onClick={(e) => {
        handleChange(id);
      }}
    >
      {team}
      <img className={s.img} src={crestUrl || unitedFlag}></img>
    </NavLink>
  );
};

export default Team;
