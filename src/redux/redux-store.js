import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import leaguesReducer from './leagues-reducer';
import teamsReducer from './teams-reducer';
import thunkMiddleware from 'redux-thunk';
import userSettingReducer from './user-setting-reducer';
import leaguesCalendarReducer from './leagues-calendar-reducer';
import teamsCalendarReducer from './teams-calendar-reducer';

let reducers = combineReducers({
  teamsPage: teamsReducer,
  leaguesPage: leaguesReducer,
  userSetting: userSettingReducer,
  leaguesCalendar: leaguesCalendarReducer,
  teamsCalendar: teamsCalendarReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
