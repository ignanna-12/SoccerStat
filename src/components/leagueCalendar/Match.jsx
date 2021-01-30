import React from 'react';
import s from './LeaguesCalendar.module.scss';

let Match = ({ homeTeam, awayTeam, date }) => {
  var months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const D = new Date(date);
  const month_value = D.getMonth();
  const day_value = D.getDate();
  const year_value = D.getFullYear();
  return (
    <div className={s.m}>
      <p>{homeTeam}</p> <p>:</p> <p>{awayTeam}</p>
      <p>
        {day_value} {months[month_value]} {year_value}
      </p>
    </div>
  );
};

export default Match;
