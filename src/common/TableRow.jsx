import React from 'react';
import s from './TableRow.module.scss';
import PropTypes from 'prop-types';

let TableRow = ({ homeTeam, awayTeam, date, striped }) => {
  const D = new Date(date);
  const month_value = D.getMonth();
  const day_value = D.getDate();
  const year_value = D.getFullYear();
  const rowClassName = striped ? s.m_striped : s.m;
  return (
    <div className={rowClassName}>
      <div className={s.name_column}>{homeTeam}</div>
      <div className={s.name_column}>{awayTeam}</div>
      <p className={s.date}>
        {day_value} {months[month_value]} {year_value}
      </p>
    </div>
  );
};

TableRow.propTypes = {
  date: PropTypes.string,
  homeTeam: PropTypes.string,
  awayTeam: PropTypes.string,
  striped: PropTypes.bool,
};

export default TableRow;
