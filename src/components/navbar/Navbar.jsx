import React, { Component } from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ season, filterValueL }) => {
  // componentDidUpdate(prevProps) {
  //   if (this.props.season !== prevProps.season) {
  //     this.setState({ season: this.props.season });
  //   }
  // }
  return (
    <div className={s.block_buttons}>
      <NavLink to={'/Leagues/' + season + '/' + filterValueL}>
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
    </div>
  );
};
export default Navbar;
