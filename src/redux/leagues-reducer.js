import { getCompetitions } from '../api/api';

let initialState = {
  competitions: [
    { id: 1, name: 'Лига1' },
    { id: 2, name: 'Лига2' },
    { id: 3, name: 'Лига3' },
  ],
  totalLeaguesCount: 3,
  currentSeason: { endDate: null },
  season: '2019',
  filterValue: 'M',
};

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEAGUES': {
      return { ...state, competitions: action.competitions };
    }
    case 'SET_TOTAL_LEAGUES_COUNT': {
      return { ...state, totalLeaguesCount: action.totalLeaguesCount };
    }
    case 'SET_SEASON': {
      return { ...state, season: action.season };
    }
    case 'SET_FILTER_VALUE': {
      return { ...state, filterValue: action.filterValue };
    }
    default:
      return state;
  }
};
export const setSeason = (season) => ({ type: 'SET_SEASON', season });
export const setLeagues = (competitions) => ({ type: 'SET_LEAGUES', competitions });
export const setTotalLeaguesCount = (totalLeaguesCount) => ({
  type: 'SET_TOTAL_LEAGUES_COUNT',
  totalLeaguesCount,
});
export const setYear = (year) => ({ type: 'SET_YEAR', year });
export const setFilterValue = (filterValue) => ({ type: 'SET_FILTER_VALUE', filterValue });

export const requestCompetitions = () => {
  return async (dispatch) => {
    let data = await getCompetitions();
    dispatch(setLeagues(data.competitions));
    dispatch(setTotalLeaguesCount(data.count));
  };
};

export const selectCompetitionsByYear = (year = 2020, competitions) => {
  if (competitions) {
    const comp = competitions.filter((i) => {
      return i.currentSeason
        ? new Date(i.currentSeason.endDate).getFullYear() === +year ||
            new Date(i.currentSeason.startDate).getFullYear() === +year
        : false;
    });
    return comp;
  } else {
    return [];
  }
};

export default leaguesReducer;
