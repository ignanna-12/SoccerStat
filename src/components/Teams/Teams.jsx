import React from 'react';
import Team from './Team';

let Teams = (props) => {
  return (
    <div>
      {props.teams.map((t) => (
        <Team team={t.name} key={t.id} />
      ))}
      {/* {props.count} */}
    </div>
  );
};
export default Teams;