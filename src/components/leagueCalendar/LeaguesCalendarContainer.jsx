import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestLeagueCalendar } from './../../redux/leagues-calendar-reducer';
import LeagueCalendar from './LeagueCalendar';

class LeaguesCalendarContainer extends React.Component {
  componentDidMount() {
    this.props.requestLeagueCalendar();
  }
  render() {
    return (
      <div>
        <LeagueCalendar
          name={this.props.name}
          matches={this.props.matches}
          // homeTeam={this.props.homeTeam}
          // awayTeam={this.props.awayTeam}
          // ensignUrl={this.props.ensignUrl}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    matches: state.leaguesCalendar.matches,
    name: state.leaguesCalendar.name,
    // ensignUrl: state.leaguesCalendar.ensignUrl,
    // utcDate: state.leaguesCalendar.utcDate,
    // homeTeam: state.leaguesCalendar.homeTeam,
    // awayTeam: state.leaguesCalendar.awayTeam,
  };
};

export default compose(connect(mapStateToProps, { requestLeagueCalendar }))(
  LeaguesCalendarContainer
);
