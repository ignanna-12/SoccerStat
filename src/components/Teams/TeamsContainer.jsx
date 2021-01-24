import React from 'react';
import { connect } from 'react-redux';
//import { requestTeams, getTeamsFromReducer } from '../../Redux/teams-reducer';
import Teams from './Teams';
import { compose } from 'redux';
import { Input, Space } from 'antd';
import s from './Teams.module.scss';
const { Search } = Input;

class TeamsContainer extends React.Component {
  // componentDidMount() {
  //   this.props.mapStateToProps();
  // }
  render() {
    const onSearch = (value) => console.log(value);
    return (
      <div>
        <Search
          className={s.search}
          placeholder="Название команды"
          onSearch={onSearch}
          enterButton
        />
        <Teams count={this.props.totalTeamsCount} teams={this.props.teams} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    teams: state.teamsPage.teams,
    totalTeamsCount: state.teamsPage.totalTeamsCount,
  };
};

export default compose(connect(mapStateToProps))(TeamsContainer);
