import React from 'react';
import { connect } from 'react-redux';
//import { requestTeams, getTeamsFromReducer } from '../../Redux/teams-reducer';
import Teams from './Teams';
import { compose } from 'redux';
import { Input, Space } from 'antd';
import s from './Teams.module.scss';
const { Search } = Input;
import { requestTeams } from '../../redux/teams-reducer';

// const onSearch = (e, teams) => {
//   console.log(e);
//   const value = e.target.value.toLowerCase();
//   const filter = teams.filter((teams) => {
//     return teams.name.toLowerCase().includes(value);
//   });
// };

const filterTeams = (teams, filterValue) => {
  if (filterValue === '') {
    return teams;
  }
  const filterTeams = teams.filter((teams) => {
    return teams.name.toLowerCase().startsWith(filterValue);
  });
  return filterTeams;
};

class TeamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterValue: '' };
  }
  componentDidMount() {
    this.props.requestTeams();
  }
  render() {
    return (
      <div>
        <Search
          className={s.search}
          placeholder="Название команды"
          onChange={(e) => this.setState({ filterValue: e.target.value.toLowerCase() })}
          enterButton
        />
        <Teams
          count={this.props.totalTeamsCount}
          teams={filterTeams(this.props.teams, this.state.filterValue)}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    teams: state.teamsPage.teams,
    totalTeamsCount: state.teamsPage.count,
  };
};

export default compose(connect(mapStateToProps, { requestTeams }))(TeamsContainer);
