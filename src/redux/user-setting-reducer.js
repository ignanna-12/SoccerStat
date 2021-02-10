let initialState = {
  season: '2021',
  selectedTeam: '57',
  selectedLeague: '2001',
};

const userSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEASON': {
      return { ...state, season: action.season };
    }
    case 'SET_SELECTED_LEAGUE': {
      return { ...state, selectedLeague: action.selectedLeague };
    }
    case 'SET_SELECTED_TEAM': {
      return { ...state, selectedTeam: action.selectedTeam };
    }
    default:
      return state;
  }
};

export const setSeason = (season) => ({ type: 'SET_SEASON', season });
export const setSelectedLeague = (selectedLeague) => ({
  type: 'SET_SELECTED_LEAGUE',
  selectedLeague,
});
export const setSelectedTeam = (selectedTeam) => ({
  type: 'SET_SELECTED_TEAM',
  selectedTeam,
});
export default userSettingReducer;
