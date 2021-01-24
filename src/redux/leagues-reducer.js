let initialState = {
  leagues: ['Лига1', 'Лига2', 'Лига3'],
  totalLeaguesCount: 3,
  year: 2000,
};

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEAGUES': {
      return { ...state, teams: action.leagues };
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
export const setLeagues = (leagues) => ({ type: 'SET_LEAGUES', leagues });
export const setTotalLeaguesCount = (totalLeaguesCount) => ({
  type: 'SET_TOTAL_LEAGUES_COUNT',
  totalLeaguesCount,
});
export const setYear = (year) => ({ type: 'SET_YEAR', year });
export default leaguesReducer;
