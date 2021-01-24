let initialState = {
  teams: ['Команда1', 'Команда2', 'Команда3'],
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
export default teamsReducer;
