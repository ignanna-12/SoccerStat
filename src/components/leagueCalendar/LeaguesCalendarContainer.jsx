import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestLeagueCalendar } from './../../redux/leagues-calendar-reducer';
import LeagueCalendar from './LeagueCalendar';
import { DatePicker, Space } from 'antd';
import s from './LeaguesCalendar.module.scss';
import store from '../../redux/redux-store';
import { setSelectedDateTo, setSelectedDateFrom } from '../../redux/user-setting-reducer';
import SelectAvailableLeague from './SelectAvailableLeague';

const handleChangeFrom = (value) => {
  store.dispatch(setSelectedDateFrom(value));
};
const handleChangeTo = (value) => {
  store.dispatch(setSelectedDateTo(value));
};
class LeaguesCalendarContainer extends React.Component {
  componentDidMount() {
    this.props.requestLeagueCalendar();
  }

  render() {
    return (
      <div className={s.top_row}>
        <div>
          <Space direction="vertical" className={s.search}>
            Показать, начиная с:
            <DatePicker onChange={handleChangeFrom} /> до: <DatePicker onChange={handleChangeTo} />
          </Space>
          <SelectAvailableLeague />
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
  };
};

export default compose(connect(mapStateToProps, { requestLeagueCalendar }))(
  LeaguesCalendarContainer
);
