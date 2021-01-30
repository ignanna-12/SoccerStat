import React from 'react';
import s from './Navbar.module.css';
import { Select } from 'antd';
import { NavLink } from 'react-router-dom';
import { setSeason } from '../../redux/leagues-reducer';

const Navbar = () => {
  return (
    <div className={s.block_buttons}>
      <NavLink to="/Leagues">
        <button className={s.button}>СПИСОК ЛИГ</button>
      </NavLink>
      :
      <NavLink to="/Teams">
        <button className={s.button}>СПИСОК КОМАНД</button>
      </NavLink>
    </div>
  );
};
export default Navbar;
