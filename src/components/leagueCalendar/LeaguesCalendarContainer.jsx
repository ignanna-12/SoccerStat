import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestLeagueCalendar } from './../../redux/leagues-calendar-reducer';
import LeagueCalendar from './LeagueCalendar';
import { DatePicker, Space } from 'antd';
import s from './LeaguesCalendar.module.scss';
import SelectAvailableLeague from './SelectAvailableLeague';

class LeaguesCalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateFrom: '', dateTo: '' };
  }
  componentDidMount() {
    this.props.requestLeagueCalendar(this.props.id, this.state.dateFrom, this.state.dateTo);
  }
  componentDidUpdate(prevState) {
    if (this.state.dateTo !== prevState.dateTo) {
      this.props.requestLeagueCalendar(this.props.id, this.state.dateFrom, this.state.dateTo);
    }
  }

  render() {
    return (
      <div className={s.top_row}>
        <div>
          <Space direction="vertical" className={s.search}>
            Показать, начиная с:
            <DatePicker onChange={(e, d) => this.setState({ dateFrom: d })} /> до:
            <DatePicker onChange={(e, d) => this.setState({ dateTo: d })} />
          </Space>
          {/* <SelectAvailableLeague /> */}
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
    dateFrom: state.leaguesCalendar.dateFrom,
    dateTo: state.leaguesCalendar.dateTo,
  };
};

export default compose(connect(mapStateToProps, { requestLeagueCalendar }))(
  LeaguesCalendarContainer
);
