import { getLeagueCalendar } from '../api/api';

let initialState = {
  matches: [],
  competitions: {},
  name: '',
  area: {},
  ensignUrl: '',
  utcDate: '',
  homeTeam: '',
  awayTeam: '',
  selectedLeague: '',
  selectedDateFrom: '',
  selectedDateTo: '',
};

const leaguesCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEAGUE_CALENDAR': {
      return {
        ...state,
        matches: action.matches,
      };
    }

    case 'SET_LEAGUES_NAME': {
      return {
        ...state,
        name: action.name,
      };
    }
    case 'SET_LEAGUES_ENSIGNURL': {
      return {
        ...state,
        ensignUrl: action.ensignUrl,
      };
    }
    case 'SET_LEAGUES_UTCDATE': {
      return {
        ...state,
        utcDate: action.utcDate,
      };
    }
    case 'SET_LEAGUES_HOMETEAM': {
      return {
        ...state,
        homeTeam: action.homeTeam,
      };
    }
    case 'SET_LEAGUES_AWAYTEAM': {
      return {
        ...state,
        awayTeam: action.awayTeam,
      };
    }
    case 'SET_SELECTED_LEAGUE': {
      return { ...state, selectedLeague: action.selectedLeague };
    }
    case 'SET_SELECTED_DATE_FROM': {
      return { ...state, selectedDateFrom: action.selectedDateFrom };
    }
    case 'SET_SELECTED_DATE_TO': {
      return { ...state, selectedDateTo: action.selectedDateTo };
    }

    default:
      return state;
  }
};

export const setLeaguesCalendar = (matches) => ({ type: 'SET_LEAGUE_CALENDAR', matches });
export const setLeaguesName = (name) => ({ type: 'SET_LEAGUES_NAME', name });
export const setLeaguesEnsignUrl = (ensignUrl) => ({ type: 'SET_LEAGUES_ENSIGNURL', ensignUrl });
export const setLeaguesUtcDate = (utcDate) => ({ type: 'SET_LEAGUES_UTCDATE', utcDate });
export const setLeaguesHomeTeam = (homeTeam) => ({ type: 'SET_LEAGUES_HOMETEAM', homeTeam });
export const setLeaguesAwayTeam = (awayTeam) => ({ type: 'SET_LEAGUES_AWAYTEAM', awayTeam });
export const setSelectedLeague = (selectedLeague) => ({
  type: 'SET_SELECTED_LEAGUE',
  selectedLeague,
});
export const setSelectedDateFrom = (selectedDateFrom) => ({
  type: 'SET_SELECTED_DATE_FROM',
  selectedDateFrom,
});
export const setSelectedDateTo = (selectedDateTo) => ({
  type: 'SET_SELECTED_DATE_TO',
  selectedDateTo,
});

export const requestLeagueCalendar = (id, dateFrom, dateTo) => {
  return async (dispatch) => {
    let data = await getLeagueCalendar(id, dateFrom, dateTo);
    dispatch(setLeaguesCalendar(data.matches.slice(0, 100)));
    dispatch(setLeaguesName(data.competition.name));
  };
};

export default leaguesCalendarReducer;
