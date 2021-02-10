import React from 'react';
import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.block}>
      <h1 className={s.h1}>
        SOCCER
        <br></br>STAT
      </h1>
    </div>
  );
};

export default Header;
