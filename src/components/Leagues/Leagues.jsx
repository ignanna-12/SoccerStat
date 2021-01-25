import React from 'react';
import League from './League';

let Leagues = (props) => {
  return (
    <div>
      {props.leagues.map((l) => (
        <League league={l.name} key={l.id} />
      ))}
      {/* {props.count} */}
    </div>
  );
};
export default Leagues;
