import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Teams.module.scss';
import unitedFlag from '../../images/all-poker-rooms.png';
import store from '../../redux/redux-store';
import { setSelectedTeam, setNameSelectedTeam } from '../../redux/teams-calendar-reducer';
import PropTypes from 'prop-types';

let Team = ({ team, crestUrl, id }) => {
  const handleChange = (id, team) => {
    store.dispatch(setSelectedTeam(id));
    store.dispatch(setNameSelectedTeam(team));
  };
  return (
    <NavLink
      className={s.team_row}
      to={'/TeamCalendar/' + id + '/' + team}
      onClick={(e) => {
        handleChange(id, team);
      }}
    >
      {team}
      <img className={s.img} src={crestUrl || unitedFlag}></img>
    </NavLink>
  );
};

Team.propTypes = {
  team: PropTypes.string,
  crestUrl: PropTypes.string,
  id: PropTypes.string,
};

export default Team;
