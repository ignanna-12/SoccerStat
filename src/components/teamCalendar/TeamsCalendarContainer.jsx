import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  requestTeamCalendar,
  setSelectedDateFrom,
  setSelectedDateTo,
} from './../../redux/teams-calendar-reducer';
import TeamCalendar from './TeamCalendar';
import { DatePicker, Space } from 'antd';
import s from './TeamsCalendar.module.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

class TeamsCalendarContainer extends React.Component {
  handleDateFromChange(object, string) {
    this.props.requestTeamCalendar(this.props.id, string, this.props.dateTo);
    this.props.setSelectedDateFrom(string);
  }
  handleDateToChange(object, string) {
    this.props.requestTeamCalendar(this.props.id, this.props.dateFrom, string);
    this.props.setSelectedDateTo(string);
  }
  componentDidMount() {
    this.props.requestTeamCalendar(
      this.props.match.params.id ? this.props.match.params.id : '57',
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
            <DatePicker
              onChange={this.handleDateFromChange.bind(this)}
              defaultValue={moment(this.props.dateFrom, 'YYYY-MM-DD')}
            />{' '}
            до:{' '}
            <DatePicker
              onChange={this.handleDateToChange.bind(this)}
              defaultValue={moment(this.props.dateTo, 'YYYY-MM-DD')}
            />
          </Space>
        </div>
        <TeamCalendar matches={this.props.matches} name={this.props.match.params.team} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    matches: state.teamsCalendar.matches,
    id: state.teamsCalendar.selectedTeam,
    dateFrom: state.teamsCalendar.selectedDateFrom,
    dateTo: state.teamsCalendar.selectedDateTo,
    nameSelectedTeam: state.teamsCalendar.nameSelectedTeam,
  };
};

TeamsCalendarContainer.propTypes = {
  requestTeamCalendar: PropTypes.function,
  id: PropTypes.string,
  dateTo: PropTypes.string,
  setSelectedDateFrom: PropTypes.function,
  dateFrom: PropTypes.string,
  setSelectedDateTo: PropTypes.function,
  match: PropTypes.objectOf(PropTypes.string),
  matches: PropTypes.object,
};

export default compose(
  connect(mapStateToProps, { requestTeamCalendar, setSelectedDateFrom, setSelectedDateTo })
)(TeamsCalendarContainer);
