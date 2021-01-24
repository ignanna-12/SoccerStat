import React from 'react';
import s from './Navbar.module.css';
import { DatePicker } from 'antd';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  function onChange(date, dateString) {}
  return (
    <div className={s.block}>
      <NavLink to="/Leagues">
        <button className={s.button}>СПИСОК ЛИГ</button>
      </NavLink>
      <NavLink to="/Teams">
        <button className={s.button}>СПИСОК КОМАНД</button>
      </NavLink>
      <NavLink to="/LeagueCalendar">
        <button className={s.button}>КАЛЕНДАРЬ ЛИГИ</button>
      </NavLink>
      <NavLink to="/TeamCalendar">
        <button className={s.button}>КАЛЕНДАРЬ КОМАНДЫ</button>
      </NavLink>
      <DatePicker onChange={onChange} picker="year" className={s.button} />
    </div>
  );
};
export default Navbar;
