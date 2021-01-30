import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': '405fb14cdc2b47eca10a85b6f6d1a87e',
  },
});

export const getTeams = () => {
  return instance.get('teams').then((response) => {
    return response.data;
  });
};

export const getCompetitions = () => {
  return instance.get('competitions').then((response) => {
    return response.data;
  });
};

export const getLeagueCalendar = (id = '', dateFrom = '', dateTo = '') => {
  return instance
    .get('competitions/' + id + '/matches?dateFrom=' + dateFrom + '&dateTo=' + dateTo)
    .then((response) => {
      return response.data;
    });
};
