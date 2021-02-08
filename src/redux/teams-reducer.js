import { getTeams } from '../api/api';

let initialState = {
  teams: [],
};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEAMS': {
      return { ...state, teams: action.teams };
    }
    default:
      return state;
  }
};
export const setTeams = (teams) => ({ type: 'SET_TEAMS', teams });

export const requestTeams = () => {
  return async (dispatch) => {
    let data = await getTeams();
    dispatch(setTeams(data.teams));
  };
};
export default teamsReducer;
