import { getLeagueCalendar } from '../api/api';
import store from './redux-store';

let initialState = {
  matches: [],
  competitions: {},
  name: '',
  area: {},
  ensignUrl: '',
  utcDate: '',
  homeTeam: '',
  awayTeam: '',
  //   {
  //     competitions: { name: '', area: { name: '', ensignUrl: '' } },
  //     // {
  //     //   competitions: { name: '', area: { name: '', ensignUrl: '' } },
  //     //   season: { startDate: '', endDate: '' },
  //     //   utcDate: '',
  //     //   homeTeam: '',
  //     //   awayTeam: '',
  //     // },
  //   },
  // ],
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

export const requestLeagueCalendar = () => {
  return async (dispatch) => {
    const id = store.getState().userSetting.selectedLeague;
    const dateFrom = store.getState().userSetting.selectedDateFrom;
    const dateTo = store.getState().userSetting.selectedDateTo;
    let data = await getLeagueCalendar(id, dateFrom, dateTo);
    dispatch(setLeaguesCalendar(data.matches));
    dispatch(setLeaguesName(data.competition.name));
    // dispatch(setLeaguesEnsignUrl(data.matches[0].competition.area.ensignUrl));
    // dispatch(setLeaguesUtcDate(data.matches[0].utcDate));
    // dispatch(setLeaguesHomeTeam(data.matches[0].homeTeam.name));
    // dispatch(setLeaguesAwayTeam(data.matches[0].awayTeam.name));
  };
};

export default leaguesCalendarReducer;
