import React from 'react';
import { connect } from 'react-redux';
import Leagues from './Leagues';
import { compose } from 'redux';
import { Input } from 'antd';
import s from './Leagues.module.scss';
const { Search } = Input;
import { requestCompetitions, selectCompetitionsByYear } from './../../redux/leagues-reducer';

const filterLeagues = (competitions, filterValue) => {
  if (filterValue === '') {
    return competitions;
  }
  const filterLeagues = competitions.filter((competitions) => {
    return competitions.name.toLowerCase().startsWith(filterValue);
  });
  return filterLeagues;
};

class LeaguesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterValue: '' };
  }
  componentDidMount() {
    this.props.requestCompetitions();
  }
  render() {
    return (
      <div>
        <Search
          className={s.search}
          placeholder="Название лиги"
          onChange={(e) => this.setState({ filterValue: e.target.value.toLowerCase() })}
          enterButton
        />
        <Leagues
          count={this.props.totalLeaguesCount}
          competitions={filterLeagues(
            selectCompetitionsByYear(this.props.season, this.props.competitions),
            this.state.filterValue
          )}
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
