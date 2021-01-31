import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';
import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import { Route } from 'react-router-dom';
import TeamsCalendarContainer from './components/teamCalendar/TeamsCalendarContainer';
import TeamsContainer from './components/Teams/TeamsContainer';
import LeaguesContainer from './components/Leagues/LeaguesContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import LeaguesCalendarContainer from './components/leagueCalendar/LeaguesCalendarContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Route path="/Leagues" component={LeaguesContainer} />
        <Route path="/Teams" component={TeamsContainer} />
        <Route path="/LeagueCalendar" component={LeaguesCalendarContainer} />
        <Route path="/TeamCalendar" component={TeamsCalendarContainer} />
      </div>
    </div>
  );
}

export default App;
