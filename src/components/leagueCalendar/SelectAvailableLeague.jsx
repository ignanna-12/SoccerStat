import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './LeaguesCalendar.module.scss';
import { Select } from 'antd';
import { setSelectedLeague } from './../../redux/user-setting-reducer';
import store from './../../redux/redux-store';
import { render } from '@testing-library/react';

const { Option } = Select;

const handleChange = (value) => {
  store.dispatch(setSelectedLeague(value));
};

class SelectAvailableLeague extends React.Component {
  componentDidMount() {
    this.props.setSelectedLeague(this.props.selectedLeague);
  }
  render() {
    return (
      <div className={s.search}>
        Название лиги:
        <Select defaultValue={'______________________'} onChange={handleChange}>
          <Option value="2001">UEFA Champions League</Option>
          <Option value="2000">FIFA World Cup</Option>
          <Option value="2002">Bundesliga</Option>
          <Option value="2003">Eredivisie</Option>
          <Option value="2013">Série A Brasil</Option>
          <Option value="2014">Primera Division Spain</Option>
          <Option value="2015">Ligue 1 France</Option>
          <Option value="2016">Championship England</Option>
          <Option value="2017">Primeira Liga Portugal</Option>
          <Option value="2018">European Championship</Option>
          <Option value="2019">Serie A Italy</Option>
          <Option value="2021">Premier League England</Option>
        </Select>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    selectedLeague: state.userSetting.selectedLeague,
  };
};

export default compose(connect(mapStateToProps, { setSelectedLeague }))(SelectAvailableLeague);
