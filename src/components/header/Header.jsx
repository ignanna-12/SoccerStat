import React from 'react';
import s from './Header.module.scss';
import h from '../../images/header1.jpg';

const Header = () => {
  return (
    <div className={s.block}>
      <h1 className={s.h1}>
        SOCCER
        <br></br>STAT
      </h1>
      <img src={h} className={s.img}></img>
    </div>
  );
};

export default Header;
