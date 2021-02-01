import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  requestTeamCalendar,
  setSelectedDateTo,
  setSelectedDateFrom,
} from './../../redux/teams-calendar-reducer';
import TeamCalendar from './TeamCalendar';
import { DatePicker, Space } from 'antd';
import s from './TeamsCalendar.module.scss';
import moment from 'moment';

class TeamsCalendarContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { dateFrom: '', dateTo: '' };
  // }

  handleDateFromChange(object, string) {
    this.props.requestTeamCalendar(this.props.id, string, this.props.dateTo);
  }
  handleDateToChange(object, string) {
    this.props.requestTeamCalendar(this.props.id, this.props.dateFrom, string);
  }
  componentDidMount() {
    this.props.requestTeamCalendar(this.props.id, this.props.dateFrom, this.props.dateTo);
  }
  // componentDidUpdate(prevState) {
  //   if (this.state.dateTo !== prevState.dateTo) {
  //     this.props.requestTeamCalendar(this.props.id, this.state.dateFrom, this.state.dateTo);
  //   }
  // }

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
        <TeamCalendar matches={this.props.matches} name={this.props.nameSelectedTeam} />
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
export default compose(connect(mapStateToProps, { requestTeamCalendar }))(TeamsCalendarContainer);
