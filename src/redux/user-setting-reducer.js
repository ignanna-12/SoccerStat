let initialState = {
  season: 2000,
};

const userSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEASON': {
      return { ...state, season: season };
    }
    default:
      return state;
  }
};

export const setSeason = (season) => ({ type: 'SET_SEASON', teams });
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
export default userSettingReducer;
