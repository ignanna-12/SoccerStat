import React from 'react';
import { connect } from 'react-redux';
import Leagues from './Leagues';
import { compose } from 'redux';
import { Input } from 'antd';
import s from './Leagues.module.scss';
const { Search } = Input;
import { requestCompetitions, selectCompetitionsByYear } from './../../redux/leagues-reducer';

class LeaguesContainer extends React.Component {
  componentDidMount() {
    this.props.requestCompetitions();
  }
  render() {
    const onSearch = (e) => {};
    return (
      <div>
        <Search className={s.search} placeholder="Название лиги" onSearch={onSearch} enterButton />
        <Leagues
          count={this.props.totalLeaguesCount}
          //competitions={this.props.competitions}
          competitions={selectCompetitionsByYear(this.props.season, this.props.competitions)}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    competitions: state.leaguesPage.competitions,
    totalLeaguesCount: state.leaguesPage.totalLeaguesCount,
    season: state.userSetting.season,
  };
};

export default compose(connect(mapStateToProps, { requestCompetitions }))(LeaguesContainer);
