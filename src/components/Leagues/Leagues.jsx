import React from 'react';
import League from './League';
import s from './Leagues.module.scss';
import PropTypes from 'prop-types';

let Leagues = (props) => {
  return (
    <div className={s.league_container}>
      {props.competitions &&
        props.competitions.map((l, i) => (
          <League competition={l.name} key={l.id} id={l.id} ensignUrl={l.area.ensignUrl} />
        ))}
    </div>
  );
};

Leagues.propTypes = {
  competitions: PropTypes.object,
};

export default Leagues;
