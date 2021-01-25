import { getCompetitions } from '../api/api';

let initialState = {
  competitions: [
    { id: 1, name: 'Лига1' },
    { id: 2, name: 'Лига2' },
    { id: 3, name: 'Лига3' },
  ],
  totalLeaguesCount: 3,
  year: 2000,
};

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEAGUES': {
      return { ...state, competitions: action.competitions };
    }
    case 'SET_TOTAL_LEAGUES_COUNT': {
      return { ...state, totalLeaguesCount: action.totalLeaguesCount };
    }
    case 'SET_YEAR': {
      return { ...state, year: action.year };
    }
    default:
      return state;
  }
};
export const setLeagues = (competitions) => ({ type: 'SET_LEAGUES', competitions });
export const setTotalLeaguesCount = (totalLeaguesCount) => ({
  type: 'SET_TOTAL_LEAGUES_COUNT',
  totalLeaguesCount,
});
export const setYear = (year) => ({ type: 'SET_YEAR', year });

export const requestCompetitions = () => {
  return async (dispatch) => {
    let data = await getCompetitions();
    dispatch(setLeagues(data.competitions));
    dispatch(setTotalLeaguesCount(data.count));
  };
};

export default leaguesReducer;
