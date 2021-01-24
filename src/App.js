import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';
import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import { Route } from 'react-router-dom';
import LeagueCalendar from './components/leagueCalendar/LeagueCalendar';
import TeamCalendar from './components/teamCalendar/TeamCalendar';
import TeamsContainer from './components/Teams/TeamsContainer';
import LeaguesContainer from './components/Leagues/LeaguesContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/Leagues" component={LeaguesContainer} />
        <Route path="/Teams" component={TeamsContainer} />
        <Route path="/LeagueCalendar" component={LeagueCalendar} />
        <Route path="/TeamCalendar" component={TeamCalendar} />
      </div>
    </div>
  );
}

export default App;
