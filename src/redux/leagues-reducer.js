import { getCompetitions } from '../api/api';

let initialState = {
  competitions: [
    { id: 1, name: 'Лига1' },
    { id: 2, name: 'Лига2' },
    { id: 3, name: 'Лига3' },
  ],
  totalLeaguesCount: 3,
  currentSeason: { endDate: null },
};

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEAGUES': {
      return { ...state, competitions: action.competitions };
    }
    case 'SET_TOTAL_LEAGUES_COUNT': {
      return { ...state, totalLeaguesCount: action.totalLeaguesCount };
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
    //dispatch(setYear(data.competitions.currentSeason.endDate));
  };
};

export const selectCompetitionsByYear = (year = 2020, competitions) => {
  console.log(competitions);
  if (competitions) {
    const comp = competitions.filter((i) => {
      return i.currentSeason ? new Date(i.currentSeason.endDate).getFullYear() === +year : false;
    });
    console.log(comp);
    return comp;
  } else {
    return [];
  }
};

export default leaguesReducer;
