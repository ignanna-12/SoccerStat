import React from 'react';
import { connect } from 'react-redux';
import Leagues from './Leagues';
import { compose } from 'redux';
import { Input } from 'antd';
import s from './Leagues.module.scss';
const { Search } = Input;
import { requestCompetitions, selectCompetitionsByYear } from './../../redux/leagues-reducer';
import { setSeason } from '../../redux/user-setting-reducer';
import PropTypes from 'prop-types';

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
      season: this.props.match.params.season ? this.props.match.params.season : '',
    };
  }
  componentDidMount() {
    this.props.requestCompetitions();
    if (this.props.history.location.search) {
      this.setState({ filterValue: `${this.props.history.location.search.split('=')[1]}` });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.season !== prevProps.season) {
      this.setState({ season: this.props.season });
      this.props.history.push({
        pathname: '/Leagues/' + this.props.season,
      });
    }
  }
  render() {
    return (
      <div>
        <Search
          className={s.search}
          placeholder="Название лиги"
          onChange={(e) => {
            if (e.target.value.toLowerCase() !== '') {
              this.props.history.push({
                pathname: '/Leagues/' + this.state.season,
                search: `?search=${e.target.value.toLowerCase()}`,
              });
            } else {
              this.props.history.push({
                pathname: '/Leagues/' + this.state.season,
              });
            }
            this.setState({ filterValue: e.target.value.toLowerCase() });
          }}
          enterButton
        />
        <Leagues
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
    season: state.userSetting.season,
  };
};

LeaguesContainer.propTypes = {
  competitions: PropTypes.object,
  season: PropTypes.string,
  requestCompetitions: PropTypes.function,
  match: PropTypes.objectOf(PropTypes.string),
  history: PropTypes.objectOf(PropTypes.string),
};

export default compose(connect(mapStateToProps, { requestCompetitions, setSeason }))(
  LeaguesContainer
);
