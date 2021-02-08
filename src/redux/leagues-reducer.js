import { getCompetitions } from '../api/api';

let initialState = {
  competitions: [],
  currentSeason: { endDate: null },
  season: '2019',
};

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEAGUES': {
      return { ...state, competitions: action.competitions };
    }
    case 'SET_SEASON': {
      return { ...state, season: action.season };
    }
    default:
      return state;
  }
};
export const setSeason = (season) => ({ type: 'SET_SEASON', season });
export const setLeagues = (competitions) => ({ type: 'SET_LEAGUES', competitions });

export const requestCompetitions = () => {
  return async (dispatch) => {
    let data = await getCompetitions();
    dispatch(setLeagues(data.competitions));
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
