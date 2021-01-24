import React from 'react';
//import { createStore } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import leaguesReducer from './leagues-reducer';
import teamsReducer from './teams-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  teamsPage: teamsReducer,
  leaguesPage: leaguesReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
