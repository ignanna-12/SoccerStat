import { getTeamCalendar } from '../api/api';
import moment from 'moment';

let initialState = {
  matches: [],
  competitions: {},
  name: '',
  area: {},
  utcDate: '',
  homeTeam: '',
  awayTeam: '',
  selectedTeam: '57',
  selectedDateFrom: moment().subtract(1, 'years').format('YYYY-MM-DD'),
  selectedDateTo: moment().subtract(-1, 'years').format('YYYY-MM-DD'),
  nameSelectedTeam: 'Arsenal FC',
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
    case 'SET_SELECTED_TEAM': {
      return { ...state, selectedTeam: action.selectedTeam };
    }
    case 'SET_SELECTED_DATE_FROM': {
      return { ...state, selectedDateFrom: action.selectedDateFrom };
    }
    case 'SET_SELECTED_DATE_TO': {
      return { ...state, selectedDateTo: action.selectedDateTo };
    }
    case 'SET_NAME_SELECTED_TEAM': {
      return { ...state, nameSelectedTeam: action.nameSelectedTeam };
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
export const setSelectedTeam = (selectedTeam) => ({
  type: 'SET_SELECTED_TEAM',
  selectedTeam,
});
export const setSelectedDateFrom = (selectedDateFrom) => ({
  type: 'SET_SELECTED_DATE_FROM',
  selectedDateFrom,
});
export const setSelectedDateTo = (selectedDateTo) => ({
  type: 'SET_SELECTED_DATE_TO',
  selectedDateTo,
});
export const setNameSelectedTeam = (nameSelectedTeam) => ({
  type: 'SET_NAME_SELECTED_TEAM',
  nameSelectedTeam,
});

export const requestTeamCalendar = (selectedTeam, dateFrom, dateTo) => {
  return async (dispatch) => {
    let data = await getTeamCalendar(selectedTeam, dateFrom, dateTo);
    dispatch(setTeamsCalendar(data.matches));
  };
};

export default teamsCalendarReducer;
