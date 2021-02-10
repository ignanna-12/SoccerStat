import React from 'react';
import { connect } from 'react-redux';
import Teams from './Teams';
import { compose } from 'redux';
import { Input } from 'antd';
import s from './Teams.module.scss';
const { Search } = Input;
import { requestTeams } from '../../redux/teams-reducer';
import PropTypes from 'prop-types';

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
    if (this.props.history.location.search) {
      this.setState({ filterValue: `${this.props.history.location.search.split('=')[1]}` });
    }
  }

  render() {
    return (
      <div>
        <Search
          className={s.search}
          placeholder="Название команды"
          defaultValue={this.state.filterValue}
          onChange={(e) => {
            if (e.target.value.toLowerCase() !== '') {
              this.props.history.push({
                pathname: '/Teams',
                search: `?search=${e.target.value.toLowerCase()}`,
              });
            } else {
              this.props.history.push({
                pathname: '/Teams',
              });
            }
            this.setState({ filterValue: e.target.value.toLowerCase() });
          }}
        />
        <Teams teams={filterTeams(this.props.teams, this.state.filterValue)} />
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

TeamsContainer.propTypes = {
  teams: PropTypes.object,
  season: PropTypes.string,
  filterValue: PropTypes.string,
  requestTeams: PropTypes.function,
  history: PropTypes.objectOf(PropTypes.string),
};

export default compose(connect(mapStateToProps, { requestTeams }))(TeamsContainer);
