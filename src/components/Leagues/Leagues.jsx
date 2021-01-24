import React from 'react';
import League from './League';

let Leagues = (props) => {
  return (
    <div>
      {props.leagues.map((t) => (
        <League league={t} key={t.id} />
      ))}
      {/* {props.count} */}
    </div>
  );
};
export default Leagues;
