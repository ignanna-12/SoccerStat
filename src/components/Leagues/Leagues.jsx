import React from 'react';
import League from './League';
import s from './Leagues.module.scss';

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
export default Leagues;
