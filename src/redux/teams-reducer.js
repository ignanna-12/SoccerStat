import { getTeams } from '../api/api';

let initialState = {
  teams: [
    { id: 1, name: 'Команда1' },
    { id: 2, name: 'Команда2' },
    { id: 3, name: 'Команда3' },
  ],
  totalTeamsCount: 3,
  year: 2000,
};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEAMS': {
      return { ...state, teams: action.teams };
    }
    case 'SET_TOTAL_TEAMS_COUNT': {
      return { ...state, totalTeamsCount: action.totalTeamsCount };
    }
    case 'SET_YEAR': {
      return { ...state, year: action.year };
    }
    default:
      return state;
  }
};
export const setTeams = (teams) => ({ type: 'SET_TEAMS', teams });
export const setTotalTeamsCount = (totalTeamsCount) => ({
  type: 'SET_TOTAL_TEAMS_COUNT',
  count: totalTeamsCount,
});
export const setYear = (year) => ({ type: 'SET_YEAR', year });

export const requestTeams = () => {
  return async (dispatch) => {
    let data = await getTeams();
    dispatch(setTeams(data.teams));
    dispatch(setTotalTeamsCount(data.count));
  };
};
export default teamsReducer;
