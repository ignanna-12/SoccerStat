let initialState = {
  season: '2021',
  selectedTeam: '57',
  selectedLeague: '2001',
  selectedDateFrom: '',
  selectedDateTo: '',
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
    case 'SET_SELECTED_DATE_FROM': {
      return { ...state, selectedDateFrom: action.selectedDateFrom };
    }
    case 'SET_SELECTED_DATE_TO': {
      return { ...state, selectedDateTo: action.selectedDateTo };
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
export const setSelectedDateFrom = (selectedDateFrom) => ({
  type: 'SET_SELECTED_DATE_FROM',
  selectedDateFrom,
});
export const setSelectedDateTo = (selectedDateTo) => ({
  type: 'SET_SELECTED_DATE_TO',
  selectedDateTo,
});
export default userSettingReducer;
