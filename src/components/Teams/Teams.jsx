import React from 'react';
import Team from './Team';
import s from './Teams.module.scss';
import PropTypes from 'prop-types';

let Teams = (props) => {
  return (
    <div className={s.teams_container}>
      {props.teams.map((t) => (
        <Team team={t.name} key={t.id} crestUrl={t.crestUrl} id={t.id} />
      ))}
    </div>
  );
};

Teams.propTypes = {
  teams: PropTypes.object,
};

export default Teams;
