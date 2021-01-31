import { getTeamCalendar } from '../api/api';
import store from './redux-store';

let initialState = {
  matches: [],
  competitions: {},
  name: '',
  area: {},
  utcDate: '',
  homeTeam: '',
  awayTeam: '',
  status: '',
};

const teamsCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEAM_CALENDAR': {
      return {
        ...state,
        matches: action.matches,
      };
    }

    case 'SET_TEAM_NAME': {
      return {
        ...state,
        name: action.name,
      };
    }

    case 'SET_TEAM_UTCDATE': {
      return {
        ...state,
        utcDate: action.utcDate,
      };
    }
    case 'SET_TEAM_HOMETEAM': {
      return {
        ...state,
        homeTeam: action.homeTeam,
      };
    }
    case 'SET_TEAM_AWAYTEAM': {
      return {
        ...state,
        awayTeam: action.awayTeam,
      };
    }

    default:
      return state;
  }
};

export const setTeamsCalendar = (matches) => ({ type: 'SET_TEAM_CALENDAR', matches });
export const setTeamsName = (name) => ({ type: 'SET_TEAM_NAME', name });
export const setTeamsUtcDate = (utcDate) => ({ type: 'SET_TEAM_UTCDATE', utcDate });
export const setTeamsHomeTeam = (homeTeam) => ({ type: 'SET_TEAM_HOMETEAM', homeTeam });
export const setTeamsAwayTeam = (awayTeam) => ({ type: 'SET_TEAM_AWAYTEAM', awayTeam });

export const requestTeamCalendar = () => {
  return async (dispatch) => {
    const id = store.getState().userSetting.selectedTeam;
    const dateFrom = store.getState().userSetting.selectedDateFrom;
    const dateTo = store.getState().userSetting.selectedDateTo;
    let data = await getTeamCalendar(id, dateFrom, dateTo);
    dispatch(setTeamsCalendar(data.matches));
  };
};

export default teamsCalendarReducer;
