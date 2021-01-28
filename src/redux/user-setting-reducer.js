let initialState = {
  season: '2020',
  selectedTeam: ' ',
  selectedLeague: ' ',
  selectedStartDay: '',
  selectedEndDay: '',
};

const userSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEASON': {
      return { ...state, season: action.season };
    }
    case 'SET_SELECTED_LEAGUE': {
      return { ...state, selectedLeague: action.selectedLeague };
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

export default userSettingReducer;
