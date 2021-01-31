import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestTeamCalendar } from './../../redux/teams-calendar-reducer';
import TeamCalendar from './TeamCalendar';
import { DatePicker, Space } from 'antd';
import store from '../../redux/redux-store';
import { setSelectedDateTo, setSelectedDateFrom } from '../../redux/user-setting-reducer';
import s from './TeamsCalendar.module.scss';

const handleChangeFrom = (e, d) => {
  store.dispatch(setSelectedDateFrom(d));
};
const handleChangeTo = (e, d) => {
  store.dispatch(setSelectedDateTo(d));
};

class TeamsCalendarContainer extends React.Component {
  componentDidMount() {
    this.props.requestTeamCalendar(this.props.id, this.props.dateFrom, this.props.dateTo);
  }

  render() {
    const getName = () => {
      if (
        this.props.matches[0].awayTeam.name === this.props.matches[1].awayTeam.name ||
        this.props.matches[0].awayTeam.name === this.props.matches[1].homeTeam.name
      ) {
        return this.props.matches[0].awayTeam.name;
      } else if (
        this.props.matches[0].homeTeam.name === this.props.matches[1].awayTeam.name ||
        this.props.matches[0].homeTeam.name === this.props.matches[1].homeTeam.name
      ) {
        return this.props.matches[0].homeTeam.name;
      }
    };
    return (
      <div className={s.top_row}>
        <div>
          <Space direction="vertical" className={s.search}>
            Показать, начиная с:
            <DatePicker onChange={handleChangeFrom} /> до: <DatePicker onChange={handleChangeTo} />
          </Space>
        </div>
        <TeamCalendar matches={this.props.matches} name={getName()} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    matches: state.teamsCalendar.matches,
    id: state.userSetting.selectedTeam,
    dateFrom: state.userSetting.dateFrom,
    dateTo: state.userSetting.dateTo,
  };
};
export default compose(connect(mapStateToProps, { requestTeamCalendar }))(TeamsCalendarContainer);
