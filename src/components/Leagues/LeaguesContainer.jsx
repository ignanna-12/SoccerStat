import React from 'react';
import { connect } from 'react-redux';
//import { requestTeams, getTeamsFromReducer } from '../../Redux/teams-reducer';
import Leagues from './Leagues';
import { compose } from 'redux';
import { Input } from 'antd';
import s from './Leagues.module.scss';
const { Search } = Input;

class LeaguesContainer extends React.Component {
  // componentDidMount() {
  //   this.props.mapStateToProps();
  // }
  render() {
    const onSearch = (value) => console.log(value);
    return (
      <div>
        <Search className={s.search} placeholder="Название лиги" onSearch={onSearch} enterButton />
        <Leagues count={this.props.totalLeaguesCount} leagues={this.props.leagues} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    leagues: state.leaguesPage.leagues,
    totalLeaguesCount: state.leaguesPage.totalLeaguesCount,
  };
};

export default compose(connect(mapStateToProps))(LeaguesContainer);
