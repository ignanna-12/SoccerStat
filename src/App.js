import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';
import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import { Route } from 'react-router-dom';
import ListOfLeagues from './components/listOfLeagues/ListOfLeagues';
import ListOfTeams from './components/listOfTeams/ListOfTeams';
import LeagueCalendar from './components/leagueCalendar/LeagueCalendar';
import TeamCalendar from './components/teamCalendar/TeamCalendar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/Leagues" component={ListOfLeagues} />
        <Route path="/Teams" component={ListOfTeams} />
        <Route path="/LeagueCalendar" component={LeagueCalendar} />
        <Route path="/TeamCalendar" component={TeamCalendar} />
      </div>
    </div>
  );
}

export default App;
