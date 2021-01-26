import React from 'react';
import s from './Navbar.module.css';
import { Select } from 'antd';
import { NavLink } from 'react-router-dom';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const Navbar = () => {
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
      <h3 className={s.h3}>Выберите год</h3>
      <Select defaultValue="2000" style={{ width: 120 }} onChange={handleChange}>
        <Option value="2000">2000</Option>
        <Option value="2001">2001</Option>
        <Option value="2002">2002</Option>
        <Option value="2003">2003</Option>
        <Option value="2013">2013</Option>
        <Option value="2014">2014</Option>
        <Option value="2015">2015</Option>
        <Option value="2016">2016</Option>
        <Option value="2017">2017</Option>
        <Option value="2018">2018</Option>
        <Option value="2019">2019</Option>
        <Option value="2021">2021</Option>
      </Select>
    </div>
  );
};
export default Navbar;
