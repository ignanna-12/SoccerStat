import React from 'react';
import { connect } from 'react-redux';
import Leagues from './Leagues';
import { compose } from 'redux';
import { Input } from 'antd';
import s from './Leagues.module.scss';
const { Search } = Input;
import {
  requestCompetitions,
  selectCompetitionsByYear,
  setFilterValue,
} from './../../redux/leagues-reducer';
import { setSeason } from '../../redux/user-setting-reducer';

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
    this.state = {
      filterValue: '',
      season: this.props.match.params.season ? this.props.match.params.season : '2021',
    };
  }
  componentDidMount() {
    this.props.requestCompetitions();
    //this.setState({ filterValue: this.props.match.params.filterValue });
    //this.props.setSeason(this.props.match.params.season);
  }
  componentDidUpdate(prevProps) {
    if (this.props.season !== prevProps.season) {
      this.setState({ season: this.props.season });
    }
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
            selectCompetitionsByYear(this.state.season, this.props.competitions),
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
    filterValue: state.leaguesPage.filterValue,
  };
};

export default compose(
  connect(mapStateToProps, { requestCompetitions, setFilterValue, setSeason })
)(LeaguesContainer);
