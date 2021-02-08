import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  requestLeagueCalendar,
  setSelectedDateFrom,
  setSelectedDateTo,
} from './../../redux/leagues-calendar-reducer';
import LeagueCalendar from './LeagueCalendar';
import { DatePicker, Space } from 'antd';
import s from './LeaguesCalendar.module.scss';
import PropTypes from 'prop-types';

class LeaguesCalendarContainer extends React.Component {
  handleDateFromChange(object, string) {
    this.props.requestLeagueCalendar(this.props.id, string, this.props.dateTo);
    this.props.setSelectedDateFrom(string);
  }
  handleDateToChange(object, string) {
    this.props.requestLeagueCalendar(this.props.id, this.props.dateFrom, string);
    this.props.setSelectedDateTo(string);
  }
  componentDidMount() {
    this.props.requestLeagueCalendar(
      this.props.match.params.id,
      this.props.dateFrom,
      this.props.dateTo
    );
  }
  render() {
    return (
      <div className={s.top_row}>
        <div>
          <Space direction="vertical" className={s.search}>
            Показать, начиная с:
            <DatePicker onChange={this.handleDateFromChange.bind(this)} /> до:{' '}
            <DatePicker onChange={this.handleDateToChange.bind(this)} />
          </Space>
        </div>
        <LeagueCalendar name={this.props.name} matches={this.props.matches} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    matches: state.leaguesCalendar.matches,
    name: state.leaguesCalendar.name,
    id: state.leaguesCalendar.selectedLeague,
    dateFrom: state.leaguesCalendar.selectedDateFrom,
    dateTo: state.leaguesCalendar.selectedDateTo,
  };
};

LeaguesCalendarContainer.propTypes = {
  requestLeagueCalendar: PropTypes.function,
  id: PropTypes.string,
  dateTo: PropTypes.string,
  setSelectedDateFrom: PropTypes.function,
  dateFrom: PropTypes.string,
  setSelectedDateTo: PropTypes.function,
  match: PropTypes.objectOf(PropTypes.string),
  matches: PropTypes.object,
  name: PropTypes.string,
};

export default compose(
  connect(mapStateToProps, { requestLeagueCalendar, setSelectedDateFrom, setSelectedDateTo })
)(LeaguesCalendarContainer);
