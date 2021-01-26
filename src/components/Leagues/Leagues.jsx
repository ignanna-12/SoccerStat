import React from 'react';
import League from './League';

let Leagues = (props) => {
  return (
    <div>
      {/* {console.log(props.leagues.filter((l) => l.currentSeason == null))} */}
      {props.competitions &&
        props.competitions.map((l, i) => (
          <League
            competition={l.name}
            key={l.id}
            season={
              props.competitions[i].currentSeason
                ? props.competitions[i].currentSeason.endDate
                : ' '
            }
          />
        ))}
      {/* {props.count} */}
    </div>
  );
};
export default Leagues;
